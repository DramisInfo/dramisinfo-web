import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Articles du blogue.
 *
 * Un fichier Markdown = un article, dans une seule langue. Les articles ne
 * sont pas appariés entre le français et l'anglais : Frédéric écrit en
 * français, et traduit un texte seulement s'il le mérite. L'index de chaque
 * langue ne montre que les articles de cette langue.
 *
 * Nom de fichier = adresse de l'article. `mon-titre.md` → /blogue/mon-titre/
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['fr', 'en']).default('fr'),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
