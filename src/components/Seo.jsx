import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://www.kipipl.com";
const image = `${siteUrl}/kipipl.jpeg`;

const pages = {
  "/": {
    title: "KIPIPL | Ready Mix, M-Sand & Blue Metals Supplier in Chennimalai",
    description: "KIPIPL supplies construction materials in Chennimalai, Perundurai and Erode, including Ready Mix Concrete, M-Sand, P-Sand, Blue Metals, K Blocks and Tile Fix Pro.",
    heading: null,
  },
  "/about": { title: "About KIPIPL | Construction Materials Supplier in Chennimalai", description: "Learn about KIPIPL's construction material manufacturing and supply capabilities serving Chennimalai, Perundurai and Erode.", heading: "About KIPIPL" },
  "/kblocks": { title: "K Blocks Supplier in Chennimalai & Perundurai | KIPIPL", description: "KIPIPL supplies durable K Blocks for construction projects in Chennimalai, Perundurai and nearby areas.", heading: "K Blocks Supplier in Chennimalai and Perundurai" },
  "/bluemetals": { title: "Blue Metal Supplier in Chennimalai & Perundurai | KIPIPL", description: "Buy Blue Metal and construction aggregates from KIPIPL in Chennimalai and Perundurai, including 6 mm, 12 mm, 20 mm, 40 mm and 53 mm sizes.", heading: "Blue Metal Supplier in Chennimalai and Perundurai" },
  "/readymix": { title: "Ready Mix Concrete Supplier in Chennimalai | KIPIPL", description: "KIPIPL supplies Ready Mix Concrete for construction projects in Chennimalai, Perundurai, Erode and surrounding areas.", heading: "Ready Mix Concrete Supplier in Chennimalai, Perundurai and Erode" },
  "/tile-fixpro": { title: "Tile Fix Pro Tile Adhesive in Chennimalai | KIPIPL", description: "Find Tile Fix Pro tile adhesive from KIPIPL in Chennimalai, Perundurai and Erode for ceramic, vitrified, floor and large-format tiles.", heading: null },
  "/contact": { title: "Contact KIPIPL | Construction Material Supplier in Chennimalai", description: "Contact KIPIPL for construction materials, Ready Mix Concrete, K Blocks, M-Sand, P-Sand and Blue Metals in Chennimalai.", heading: "Contact KIPIPL" },
  "/knowledge/blog": { title: "Construction Materials Blog | KIPIPL Chennimalai & Perundurai", description: "Read KIPIPL construction material insights, product guidance and industry updates for Chennimalai and Perundurai.", heading: "Construction Materials Blog" },
  "/knowledge/faqs": { title: "Construction Material FAQ | KIPIPL Chennimalai", description: "Answers to common questions about KIPIPL construction materials, M-Sand, P-Sand, Blue Metals, Ready Mix Concrete and K Blocks in Chennimalai.", heading: null },
};

function upsert(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) { element = document.createElement("meta"); document.head.appendChild(element); }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

export default function Seo() {
  const { pathname } = useLocation();
  const page = pages[pathname] || pages["/"];
  const url = `${siteUrl}${pathname === "/" ? "/" : pathname}`;

  useEffect(() => {
    document.title = page.title;
    upsert('meta[name="description"]', { name: "description", content: page.description });
    upsert('meta[name="robots"]', { name: "robots", content: "index, follow" });
    upsert('meta[property="og:title"]', { property: "og:title", content: page.title });
    upsert('meta[property="og:description"]', { property: "og:description", content: page.description });
    upsert('meta[property="og:url"]', { property: "og:url", content: url });
    upsert('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsert('meta[property="og:image"]', { property: "og:image", content: image });
    upsert('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsert('meta[name="twitter:title"]', { name: "twitter:title", content: page.title });
    upsert('meta[name="twitter:description"]', { name: "twitter:description", content: page.description });
    upsert('meta[name="twitter:image"]', { name: "twitter:image", content: image });
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", url);
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        ...(pathname === "/" ? [{ "@type": "Organization", name: "KIPIPL", url: siteUrl, logo: image }, { "@type": "WebSite", name: "KIPIPL", url: siteUrl }] : []),
        { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, ...(pathname === "/" ? [] : [{ "@type": "ListItem", position: 2, name: page.heading || page.title, item: url }])] }
      ]
    };
    let script = document.getElementById("kipipl-seo-schema");
    if (!script) { script = document.createElement("script"); script.id = "kipipl-seo-schema"; script.type = "application/ld+json"; document.head.appendChild(script); }
    script.textContent = JSON.stringify(schema);
  }, [page, pathname, url]);

  return page.heading ? <h1 style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }}>{page.heading}</h1> : null;
}
