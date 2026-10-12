"""Notify IndexNow of Caraaios pages that were actually added or updated.

Usage: python scripts/submit-indexnow.py / /work --submit
Without --submit, print the URLs that would be sent.
"""

import argparse
import json
from pathlib import Path
from urllib.error import HTTPError
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
ORIGIN = "https://caraaios.com"
KEY_LOCATION = ORIGIN + "/indexnow-key.txt"
INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("paths", nargs="+", help="Changed paths, for example / /work")
    parser.add_argument("--submit", action="store_true", help="Send the request to IndexNow")
    args = parser.parse_args()

    key = (ROOT / "public/indexnow-key.txt").read_text(encoding="ascii").strip()
    if len(key) != 32 or any(c not in "0123456789abcdef" for c in key):
        parser.error("The public IndexNow key must contain 32 hexadecimal characters")

    sitemap = ET.parse(ROOT / "public/sitemap-pages.xml").getroot()
    canonical_urls = {
        node.text for node in sitemap.findall("{*}url/{*}loc") if node.text
    }
    urls = list(dict.fromkeys(ORIGIN + path for path in args.paths))
    if any(url not in canonical_urls for url in urls):
        parser.error("Only canonical paths in public/sitemap-pages.xml may be submitted")

    if not args.submit:
        print(json.dumps({"wouldSubmit": urls}, ensure_ascii=False, indent=2))
        return

    with urlopen(KEY_LOCATION, timeout=20) as response:
        if response.read().decode("ascii").strip() != key:
            raise RuntimeError("The public key file does not match this checkout")

    payload = json.dumps({
        "host": "caraaios.com",
        "key": key,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }).encode("utf-8")
    request = Request(INDEXNOW_ENDPOINT, data=payload, method="POST", headers={
        "Content-Type": "application/json; charset=utf-8",
    })
    try:
        with urlopen(request, timeout=30) as response:
            status = response.status
    except HTTPError as error:
        raise RuntimeError(f"IndexNow rejected the submission (HTTP {error.code})") from error
    if status not in (200, 202):
        raise RuntimeError(f"Unexpected IndexNow response: HTTP {status}")
    print(json.dumps({
        "status": status,
        "received": urls,
        "keyValidation": "pending" if status == 202 else "accepted",
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
