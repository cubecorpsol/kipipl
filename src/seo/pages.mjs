// Per-location SEO pages are generated from site.serviceAreas so the list, the routes,
// the sitemap and the prerendered HTML can never drift apart. Used by Seo.jsx and scripts/prerender.mjs.
export const LOCATIONS_PATH = "/knowledge/service-locations";

export const locationSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function findLocation(site, slug) {
  for (const area of site.serviceAreas) {
    const town = area.locations.find((l) => locationSlug(l) === slug);
    if (town) return { town, district: area.district, nearby: area.locations.filter((l) => l !== town) };
  }
  return null;
}

const list = (arr) => (arr.length > 1 ? `${arr.slice(0, -1).join(", ")} and ${arr[arr.length - 1]}` : arr[0]);

export function withLocationPages(site) {
  const pages = { ...site.pages };
  const productNames = site.products.map((p) => p.name);
  for (const area of site.serviceAreas) {
    for (const town of area.locations) {
      const { nearby } = findLocation(site, locationSlug(town));
      const note = site.locationNotes?.[town];
      pages[`${LOCATIONS_PATH}/${locationSlug(town)}`] = {
        name: town,
        nav: false,
        parent: LOCATIONS_PATH,
        location: town,
        district: area.district,
        title: `M Sand, Aggregates & Blocks Supplier in ${town} | KIPIPL`,
        description: `KIPIPL supplies ${list(productNames)} in ${town}, ${area.district}, from its own quarry and plant in Chennimalai. Get a quote today.`,
        h1: `Construction Materials Supplier in ${town}`,
        keywords: [
          ...site.products.map((p) => `${p.name} ${town}`),
          `blue metal ${town}`,
          `construction materials ${town}`,
          `building materials supplier ${town}`,
        ],
        content: [
          `KIPIPL supplies ${list(productNames)} in ${town}, ${area.district}, directly from its own quarry and manufacturing units in Chennimalai.${note ? " " + note : ""}`,
          ...site.products.map((p) => `${p.name}: ${p.desc}`),
          nearby.length ? `Also serving nearby areas: ${nearby.join(", ")}.` : "",
        ].filter(Boolean),
      };
    }
  }
  return { ...site, pages };
}
