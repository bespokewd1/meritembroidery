import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
    vite: {
    plugins: [tailwindcss()],
  },
  site: "https://www.yourwebsite.com", // update me!
  integrations: [icon(), sitemap({
    filter: (page) => !page.includes("/admin"),
    changefreq: "weekly",
    priority: 0.7,
  }), react()],
});