import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['fr', 'en']),
    permalink: z.string(),
    icon: z.string().default('automate'),
    tags: z.array(z.string()).default([]),
    author: z.string().default('DramisInfo'),
  }),
});

export const collections = { blog };
