// Shared by src/components/Seo.jsx (browser) and scripts/prerender.mjs (build), so both emit the same JSON-LD.
export function buildSchema(site, path, faqs) {
  const page = site.pages[path];
  const graph = path === "/"
    ? [site.business, { "@type": "WebSite", name: "KIPIPL", url: `${site.siteUrl}/`, publisher: { "@id": site.business["@id"] } }]
    : [{
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.siteUrl}/` },
          { "@type": "ListItem", position: 2, name: page.name, item: `${site.siteUrl}${path}` },
        ],
      }];
  if (page.faqs && faqs) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
