import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const qa = defineCollection({
  loader: glob({ base: './src/content/qa', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().min(60).max(80),
    order: z.number().int().optional(),
    date: z.coerce.date().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    date: z.coerce.date(),
  }),
});

const knowledge = defineCollection({
  loader: glob({ base: './src/content/knowledge', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().trim().min(1),
    category: z.string().trim().min(1),
    date: z.coerce.date(),
    excerpt: z.string().trim().min(1),
    image: z.string().trim().min(1),
    order: z.number().int(),
  }),
});

export const collections = { qa, news, knowledge };
