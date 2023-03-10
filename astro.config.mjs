import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "static",
  adapter: vercel({
    analytics: true,
  })
});