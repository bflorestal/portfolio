// https://astro.build/config
import mdx from "@astrojs/mdx";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), icon()],
});
