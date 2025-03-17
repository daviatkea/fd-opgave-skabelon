// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon"; // Import the icon integration

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  experimental: {
    svg: true,
    clientPrerender: true,
  },
  integrations: [icon()], // Add the icon integration here
});
