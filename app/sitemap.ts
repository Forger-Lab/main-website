import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.solvolab.com";

/**
 * Sitemap is generated from this single list. To add a new public route,
 * add an entry here (or refactor to glob the `app/` directory), robots.ts
 * already points crawlers at this file.
 */
const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/",        changeFrequency: "weekly",  priority: 1.0 },
  { path: "/privacy", changeFrequency: "yearly",  priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
