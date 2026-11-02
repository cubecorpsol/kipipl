// Runs after `react-scripts build`. The app is client-rendered, so without this every URL
// returns the same empty shell with the home page's title, which Google treats as duplicates
// of the home page and AI crawlers (which don't run JavaScript) see as blank.
// For each route this writes build/<route>.html (served at /<route> via vercel.json cleanUrls)
// with that page's head tags, JSON-LD and readable text inside #root. React replaces the
// text when it mounts. It also writes sitemap.xml, llms.txt and 404.html.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildSchema } from "../src/seo/schema.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const build = join(root, "build");
const site = JSON.parse(readFileSync(join(root, "src/seo/site.json"), "utf8"));
const faqs = JSON.parse(readFileSync(join(root, "src/knowledge/faqs.json"), "utf8"));
const template = readFileSync(join(build, "index.html"), "utf8");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// JSON inside <script> must not contain a literal "</script"
const json = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

const managedTags = [
  /<title>[\s\S]*?<\/title>/g,
  /<meta (?:name|property)="(?:description|keywords|robots|og:title|og:description|og:url|twitter:title|twitter:description)"[^>]*>/g,
  /<link rel="canonical"[^>]*>/g,
];

function render({ title, description, keywords, url, robots, schema, body }) {
  let html = template;
  for (const re of managedTags) html = html.replace(re, "");
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    keywords && `<meta name="keywords" content="${esc(keywords.join(", "))}">`,
    `<meta name="robots" content="${robots}">`,
    url && `<link rel="canonical" href="${url}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    url && `<meta property="og:url" content="${url}">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    schema && `<script type="application/ld+json" id="kipipl-seo-schema">${json(schema)}</script>`,
  ].filter(Boolean).join("");
  if (!html.includes("</head>") || !html.includes('<div id="root"></div>')) throw new Error("build/index.html has an unexpected shape");
  return html.replace("</head>", `${head}</head>`).replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

const nav = `<nav aria-label="Main"><ul>${Object.entries(site.pages)
  .map(([path, p]) => `<li><a href="${path}">${esc(p.name || "Home")}</a></li>`).join("")}</ul></nav>`;
const footer = `<footer><p>KIPIPL – Kannan Blue Metals, Murugantholuvu, Chennimalai, Tamil Nadu 638051. Phone: +91 98428 30590, +91 99425 30590. Email: info@kipipl.com</p></footer>`;
const wrap = (inner) => `<div style="max-width:960px;margin:0 auto;padding:24px;font-family:Arial,sans-serif;line-height:1.6;color:#222">${nav}<main>${inner}</main>${footer}</div>`;

const today = new Date().toISOString().slice(0, 10);
for (const [path, page] of Object.entries(site.pages)) {
  const url = `${site.siteUrl}${path}`;
  const faqHtml = page.faqs ? faqs.map(({ q, a }) => `<h2>${esc(q)}</h2><p>${esc(a)}</p>`).join("") : "";
  const html = render({
    ...page,
    url,
    robots: "index, follow, max-image-preview:large",
    schema: buildSchema(site, path, faqs),
    body: wrap(`<h1>${esc(page.h1)}</h1><p>${esc(page.description)}</p>${page.content.map((c) => `<p>${esc(c)}</p>`).join("")}${faqHtml}`),
  });
  const file = path === "/" ? join(build, "index.html") : join(build, `${path.slice(1)}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

writeFileSync(join(build, "404.html"), render({
  title: "Page not found | KIPIPL",
  description: "This page does not exist. Browse KIPIPL's M Sand, Blue Metal, K Blocks, Ready Mix Concrete and Tile Fix Pro pages.",
  robots: "noindex, follow",
  body: wrap("<h1>Page not found</h1>"),
}));

writeFileSync(join(build, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(site.pages)
    .map((path) => `  <url><loc>${site.siteUrl}${path}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>\n`);

writeFileSync(join(build, "llms.txt"), [
  "# KIPIPL – Kannan Infra Projects (Kannan Blue Metals)",
  "",
  `> ${site.pages["/"].description}`,
  "",
  "Address: Kannan Blue Metals, Murugantholuvu, Chennimalai, Tamil Nadu 638051, India. Phone: +91 98428 30590, +91 99425 30590. Email: info@kipipl.com",
  "",
  "## Pages",
  ...Object.entries(site.pages).map(([path, p]) => `- [${p.name || "Home"}](${site.siteUrl}${path}): ${p.description}`),
  "",
  "## FAQs",
  ...faqs.map(({ q, a }) => `- ${q} ${a}`),
  "",
].join("\n"));

console.log(`Prerendered ${Object.keys(site.pages).length} pages, 404.html, sitemap.xml and llms.txt`);
