import type { APIRoute } from "astro";
import { pages } from "../data/content";

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const urls = pages.map((page) => `<url><loc>${new URL(`${base}${page.path.replace(/^\//, "")}`, site)}</loc></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { "Content-Type": "application/xml" }
  });
};
