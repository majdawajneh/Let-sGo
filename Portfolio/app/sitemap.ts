import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const now = new Date();
  return [
    { url: baseUrl, lastModified: now },
    { url: `${baseUrl}/work`, lastModified: now },
    { url: `${baseUrl}/blog`, lastModified: now },
    ...projects.map((project) => ({ url: `${baseUrl}/work/${project.slug}`, lastModified: now })),
    ...posts.map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: new Date(post.date) })),
  ];
}
