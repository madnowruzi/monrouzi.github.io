import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
   schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
   }),
});

export const collections = {
   blog: blogCollection,
};
