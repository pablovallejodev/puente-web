import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

const contentSecurityPolicy = {
  directives: [
    "default-src 'self'",
    "base-uri 'self'",
    "connect-src 'self'",
    "font-src 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "img-src 'self' data:",
    "manifest-src 'self'",
    "object-src 'none'",
  ],
};

export default defineConfig({
  site: "https://puente.pablovallejo.dev",
  output: "static",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          ca: "ca-ES",
          en: "en-US",
        },
      },
    }),
  ],
  security: {
    csp: contentSecurityPolicy,
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "ca", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
