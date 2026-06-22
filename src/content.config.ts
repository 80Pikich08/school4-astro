import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({
    base: "./src/content/news",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
  }),
});

const documents = defineCollection({
  loader: glob({
    base: "./src/content/documents",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    category: z.string(),
    pubDate: z.coerce.date(),
    file: z.string().optional(),
  }),
});

export const collections = {
  news,
  documents,
};
