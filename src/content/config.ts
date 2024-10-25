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
    schema: ({ image }) =>
      z.object({
        name: z.string(),
        image: image().refine((img) => img.width >= 1080, {
          message: "Cover image must be at least 1080 pixels wide!",
        }),
        technos: z.array(z.string()),
        repo: z.string().url().optional(),
        link: z.string().url().optional(),
        priority: z.number(),
      }),
  }),
};
