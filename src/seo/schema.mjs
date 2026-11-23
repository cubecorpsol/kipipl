// Shared by src/components/Seo.jsx (browser) and scripts/prerender.mjs (build), so both emit the same JSON-LD.
export function buildSchema(site, path, faqs) {
  const page = site.pages[path];
  const graph = path === "/"
    ? [site.business, { "@type": "WebSite", name: "KIPIPL", url: `${site.siteUrl}/`, publisher: { "@id": site.business["@id"] } }]
    : [{
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.siteUrl}/` },
          ...(page.parent ? [{ "@type": "ListItem", position: 2, name: site.pages[page.parent].name, item: `${site.siteUrl}${page.parent}` }] : []),
          { "@type": "ListItem", position: page.parent ? 3 : 2, name: page.name, item: `${site.siteUrl}${path}` },
        ],
      }];
  if (page.location) {
    graph.push({
      "@type": "Service",
      name: `Construction materials supply in ${page.location}`,
      serviceType: "Construction materials supply",
      provider: { "@id": site.business["@id"] },
      areaServed: { "@type": "City", name: page.location, containedInPlace: { "@type": "AdministrativeArea", name: page.district } },
    });
  }
  if (path === "/about") {
    graph.push({
      "@type": "AboutPage",
      name: page.h1,
      url: `${site.siteUrl}${path}`,
      about: { "@id": site.business["@id"] },
    });
    for (const p of site.people || []) {
      graph.push({ "@type": "Person", name: p.name, jobTitle: p.jobTitle, worksFor: { "@id": site.business["@id"] } });
    }
  }
  if (page.faqs && faqs) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
