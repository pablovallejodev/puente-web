# Puente web

Landing estática del proyecto open source **Puente**: traducción de voz en tiempo real, offline, MIT.

La identidad, la voz y las reglas visuales del proyecto están en la
[guía de marca de Puente](https://github.com/pablovallejodev/puente/blob/main/BRAND.md).

## Requisitos

- Node 20+
- [pnpm](https://pnpm.io/)

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:4321` (ES por defecto). Idiomas:

- Español: `/`
- Català: `/ca/`
- English: `/en/`

## Build

```bash
pnpm build
pnpm preview
```

La salida estática queda en `dist/`.

## Deploy

Cualquier hosting estático sirve (`dist/`):

- Cloudflare Pages / Netlify / GitHub Pages
- En `astro.config.mjs`, ajusta `site` a tu dominio real antes de publicar

## Stack

- Astro (static)
- CSS propio + Mulish
- i18n: ES / CA / EN
