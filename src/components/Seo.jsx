import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import site from "../seo/site.json";
import faqs from "../knowledge/faqs.json";
import { buildSchema } from "../seo/schema.mjs";

function setTag(tag, keyAttr, key, content) {
  let el = document.head.querySelector(`${tag}[${keyAttr}="${key}"]`);
  if (content == null) return el?.remove();
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(keyAttr, key);
    document.head.appendChild(el);
  }
  el.setAttribute(tag === "link" ? "href" : "content", content);
}

// Keeps head tags right during client-side navigation; scripts/prerender.mjs writes the same tags into each page's HTML at build time.
export default function Seo() {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const page = site.pages[path];

  useEffect(() => {
    // Unknown routes still render the SPA shell: keep them out of the index instead of passing them off as the home page.
    const url = page ? `${site.siteUrl}${path}` : null;
    const title = page ? page.title : "Page not found | KIPIPL";
    document.title = title;
    setTag("meta", "name", "description", page?.description);
    setTag("meta", "name", "keywords", page?.keywords.join(", "));
    setTag("meta", "name", "robots", page ? "index, follow, max-image-preview:large" : "noindex, follow");
    setTag("link", "rel", "canonical", url);
    setTag("meta", "property", "og:title", title);
    setTag("meta", "property", "og:description", page?.description);
    setTag("meta", "property", "og:url", url);
    setTag("meta", "name", "twitter:title", title);
    setTag("meta", "name", "twitter:description", page?.description);

    let script = document.getElementById("kipipl-seo-schema");
    if (!page) return script?.remove();
    if (!script) {
      script = document.createElement("script");
      script.id = "kipipl-seo-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(buildSchema(site, path, faqs));
  }, [page, path]);

  return null;
}
