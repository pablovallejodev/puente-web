import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://puente.app",
  output: "static",
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "ca", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
