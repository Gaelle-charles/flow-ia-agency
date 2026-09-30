import assert from "node:assert/strict";
import test from "node:test";

import { localeFromAcceptLanguage } from "../src/lib/locale-preference.ts";

test("regional variants use their available base language", () => {
  assert.equal(localeFromAcceptLanguage("en-GB,en;q=0.9,fr;q=0.8"), "en");
  assert.equal(localeFromAcceptLanguage("fr-CA,fr;q=0.9,en;q=0.8"), "fr");
});

test("quality values and order decide between available translations", () => {
  assert.equal(localeFromAcceptLanguage("en;q=0.5,fr;q=0.9"), "fr");
  assert.equal(localeFromAcceptLanguage("en;q=0.8,fr;q=0.8"), "en");
  assert.equal(localeFromAcceptLanguage("fr;q=0.8,en;q=0.8"), "fr");
});

test("an available second language beats an unsupported first language", () => {
  assert.equal(localeFromAcceptLanguage("de-DE,de;q=0.9,en-US;q=0.8"), "en");
  assert.equal(localeFromAcceptLanguage("es-ES,es;q=0.9,fr;q=0.7"), "fr");
});

test("unavailable preferences fall back without selecting a rejected language", () => {
  assert.equal(localeFromAcceptLanguage("fr;q=0,en;q=0.8"), "en");
  assert.equal(localeFromAcceptLanguage("de-DE"), "en");
  assert.equal(localeFromAcceptLanguage(undefined), "fr");
  assert.equal(localeFromAcceptLanguage("*"), "fr");
});
