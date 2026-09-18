# Puente web

Landing estática de la app **Puente**: traducción de voz en tiempo real y offline.
El código de la app y de esta web utiliza GNU Affero General Public License v3.0
(AGPLv3). Este repositorio web especifica `AGPL-3.0-only`.
Los modelos de IA utilizados por la app conservan sus propias licencias.

Diseño con fondo blanco, acentos marrones y Mulish alojada localmente.
La ilustración original se conserva en `public/images/`; la web sirve versiones
WebP adaptadas a la pantalla. La licencia de Mulish está en `public/fonts/OFL.txt`.

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

## Licencia de la web

Copyright (c) 2026 Pablo Vallejo.

Este repositorio web se distribuye bajo la [GNU Affero General Public License,
versión 3 únicamente](LICENSE) (`AGPL-3.0-only`). Puedes usarlo, modificarlo y
redistribuirlo, incluso con fines comerciales, cumpliendo sus condiciones.
Se proporciona sin garantía alguna, incluidas las garantías implícitas de
comerciabilidad o adecuación a un propósito particular.

Al distribuir versiones cubiertas por la licencia, debes conservar los avisos,
identificar los cambios, mantener la licencia y facilitar el código fuente
correspondiente según sus términos. Si modificas el programa y permites que
usuarios interactúen con esa versión por red, debes ofrecerles acceso gratuito
a su código fuente correspondiente, como establece la sección 13.

El pie de página enlaza al [código de la web](https://github.com/pablovallejodev/puente-web)
y a `/LICENSE.txt`, generado desde `LICENSE` e incluido en `dist/`.

Los componentes de terceros conservan sus propias licencias; Mulish utiliza
la [SIL Open Font License](public/fonts/OFL.txt).

## Deploy

Cualquier hosting estático sirve (`dist/`):

- Cloudflare Pages / Netlify / GitHub Pages
- En `astro.config.mjs`, ajusta `site` a tu dominio real antes de publicar
- Publica los fuentes correspondientes a la versión desplegada y comprueba que
  el enlace al código del pie de página apunta a ellos, también si publicas un fork

## Stack

- Astro (static)
- CSS propio + Mulish
- i18n: ES / CA / EN
