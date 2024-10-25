import { defineCollection, z } from "astro:content";

export const collections = {
  education: defineCollection({
    schema: z.object({
      degree: z.string(),
      name: z.string(),
      school: z.string(),
      city: z.string(),
      startDate: z.date(),
      endDate: z.date().optional(),
    }),
  }),
  projects: defineCollection({
    schema: z.object({
      name: z.string(),
      image: z.string(),
      technos: z.array(z.string()),
      repo: z.string().url().optional(),
      link: z.string().url().optional(),
      priority: z.number(),
    }),
  }),
};
