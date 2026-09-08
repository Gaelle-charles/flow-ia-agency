import brand from "@/content/brand.config.json";

export function pageMeta(title: string, description: string, index = true) {
  const fullTitle = `${title} | ${brand.name}`;

  return [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "robots", content: index ? "index, follow" : "noindex, follow" },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
}
