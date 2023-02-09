// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

export const collections = {
  project: defineCollection({
    schema: z.object({
      name: z.string(),
      description: z.string(),
      image: z.string(),
      technos: z.array(z.string()),
      repo: z.string().url().optional(),
      link: z.string().url().optional(),
      priority: z.number(),
    }),
  }),
};
