export const locales = ["es", "ca", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const githubUrl = "https://github.com/pablovallejodev/puente";
export const siteName = "Puente";

export const ogLocale: Record<Locale, string> = {
  es: "es_ES",
  ca: "ca_ES",
  en: "en_US",
};

export const ui = {
  es: {
    meta: {
      title: "Puente — lo que une civilizaciones",
      description:
        "Traducción de voz en tiempo real en tu móvil. Offline. Gratuita. Código abierto.",
      ogAlt: "Puente — icono de la marca.",
    },
    nav: {
      code: "Código",
      skip: "Saltar al contenido",
      langLabel: "Idioma",
    },
    hero: {
      brand: "Puente",
      slogan: "lo que une civilizaciones",
      lead: "Traducción de voz en tiempo real en tu móvil. Offline. Gratuita. Código abierto.",
      ctaPrimary: "Ver código en GitHub",
      ctaSecondary: "Pronto en Google Play",
    },
    what: {
      title: "Habla. Escucha. Entiende.",
      body: "Puente traduce lo que dices en el momento, en tu bolsillo, sin enviar tu voz a ningún servidor. Para cuando el idioma es la única frontera que queda.",
    },
    how: {
      title: "Cómo funciona",
      lead: "Tres pasos. Sin cuentas. Sin misterios.",
      steps: [
        {
          n: "01",
          title: "Consigue la app",
          body: "Muy pronto en Google Play. Mientras tanto, el código está abierto en GitHub: puedes verlo, auditarlo y contribuir.",
        },
        {
          n: "02",
          title: "Descarga los motores una vez",
          body: "La primera vez, eliges en el teléfono lo que necesitas para escuchar y traducir. Después, ya no hace falta internet.",
        },
        {
          n: "03",
          title: "Habla en vivo",
          body: "Activas el micrófono y la traducción aparece al instante. Tú controlas el dispositivo. Nadie más escucha.",
        },
      ],
    },
    privacy: {
      title: "Tu conversación se queda en tu teléfono",
      body: "Tras la descarga inicial, Puente funciona sin red — incluso en modo avión. El audio se procesa en el dispositivo y no se guarda. Privacidad de verdad, no de letra pequeña.",
    },
    models: {
      title: "Eliges según tu móvil",
      lead: "Sin jerga innecesaria: hay tamaños distintos para que funcione bien en más teléfonos.",
      whisperTitle: "Escucha",
      whisperBody:
        "Whisper Tiny, Base o Small: más rápido, equilibrado o más preciso. Tú decides según la memoria de tu dispositivo.",
      nllbTitle: "Traducción",
      nllbBody:
        "NLLB es el motor de traducción: cientos de pares de idiomas, pensado para correr en el móvil.",
      note: "La descarga ocupa espacio; elige lo que mejor encaje en tu teléfono.",
    },
    community: {
      title: "De la comunidad, para la comunidad",
      body: "Puente es software libre con licencia MIT: gratuito, auditable y modificable. Hecho por Pablo Vallejo — una persona, no una empresa esperando el próximo ciclo de financiación.",
      cta: "Abrir el repositorio",
    },
    institutional: {
      title: "Sin esperar al año fiscal",
      body: "Mientras en Bruselas se espera a que maduren las subvenciones, el trabajo útil ya puede caber en un teléfono. Puente existe para quien necesita entenderse hoy — no el año fiscal que viene.",
    },
    closing: {
      title: "Puente — un puente entre civilizaciones",
      body: "Offline. Gratuito. Código abierto. Empieza mirando el código; Google Play llega en las próximas semanas.",
      ctaPrimary: "Ver código en GitHub",
      ctaSecondary: "Pronto en Google Play",
    },
    footer: {
      license: "Licencia MIT",
      by: "Hecho por Pablo Vallejo",
      rights: "© 2026 Pablo Vallejo",
    },
  },
  ca: {
    meta: {
      title: "Puente — el que uneix civilitzacions",
      description:
        "Traducció de veu en temps real al mòbil. Offline. Gratuïta. Codi obert.",
      ogAlt: "Puente — icona de la marca.",
    },
    nav: {
      code: "Codi",
      skip: "Salta al contingut",
      langLabel: "Idioma",
    },
    hero: {
      brand: "Puente",
      slogan: "el que uneix civilitzacions",
      lead: "Traducció de veu en temps real al mòbil. Offline. Gratuïta. Codi obert.",
      ctaPrimary: "Mira el codi a GitHub",
      ctaSecondary: "Aviat a Google Play",
    },
    what: {
      title: "Parla. Escolta. Entén.",
      body: "Puente tradueix el que dius en el moment, a la butxaca, sense enviar la veu a cap servidor. Per quan l’idioma és l’única frontera que queda.",
    },
    how: {
      title: "Com funciona",
      lead: "Tres passos. Sense comptes. Sense misteris.",
      steps: [
        {
          n: "01",
          title: "Aconsegueix l’app",
          body: "Molt aviat a Google Play. Mentrestant, el codi és obert a GitHub: el pots veure, auditar i contribuir-hi.",
        },
        {
          n: "02",
          title: "Descarrega els motors un cop",
          body: "La primera vegada, tries al telèfon el que cal per escoltar i traduir. Després, ja no cal internet.",
        },
        {
          n: "03",
          title: "Parla en directe",
          body: "Actives el micròfon i la traducció apareix a l’instant. Tu controles el dispositiu. Ningú més escolta.",
        },
      ],
    },
    privacy: {
      title: "La conversa es queda al telèfon",
      body: "Després de la baixada inicial, Puente funciona sense xarxa — fins i tot en mode avió. L’àudio es processa al dispositiu i no es desa. Privadesa de veritat, no de lletra petita.",
    },
    models: {
      title: "Tries segons el mòbil",
      lead: "Sense jerga innecessària: hi ha mides diferents perquè vagi bé en més telèfons.",
      whisperTitle: "Escolta",
      whisperBody:
        "Whisper Tiny, Base o Small: més ràpid, equilibrat o més precís. Tu decides segons la memòria del dispositiu.",
      nllbTitle: "Traducció",
      nllbBody:
        "NLLB és el motor de traducció: centenars de parells d’idiomes, pensat per córrer al mòbil.",
      note: "La baixada ocupa espai; tria el que millor encaixi al telèfon.",
    },
    community: {
      title: "De la comunitat, per a la comunitat",
      body: "Puente és programari lliure amb llicència MIT: gratuït, auditable i modificable. Fet per Pablo Vallejo — una persona, no una empresa esperant el proper cicle de finançament.",
      cta: "Obre el repositori",
    },
    institutional: {
      title: "Sense esperar l’any fiscal",
      body: "Mentre a Brussel·les s’espera que madurin les subvencions, la feina útil ja pot cabre en un telèfon. Puente existeix per a qui necessita entendre’s avui — no l’any fiscal que ve.",
    },
    closing: {
      title: "Puente — un pont entre civilitzacions",
      body: "Offline. Gratuït. Codi obert. Comença mirant el codi; Google Play arriba les properes setmanes.",
      ctaPrimary: "Mira el codi a GitHub",
      ctaSecondary: "Aviat a Google Play",
    },
    footer: {
      license: "Llicència MIT",
      by: "Fet per Pablo Vallejo",
      rights: "© 2026 Pablo Vallejo",
    },
  },
  en: {
    meta: {
      title: "Puente — what unites civilizations",
      description:
        "Real-time voice translation on your phone. Offline. Free. Open source.",
      ogAlt: "Puente — brand icon.",
    },
    nav: {
      code: "Code",
      skip: "Skip to content",
      langLabel: "Language",
    },
    hero: {
      brand: "Puente",
      slogan: "what unites civilizations",
      lead: "Real-time voice translation on your phone. Offline. Free. Open source.",
      ctaPrimary: "View code on GitHub",
      ctaSecondary: "Coming soon to Google Play",
    },
    what: {
      title: "Speak. Listen. Understand.",
      body: "Puente translates what you say in the moment, in your pocket, without sending your voice to any server. For when language is the only border left.",
    },
    how: {
      title: "How it works",
      lead: "Three steps. No accounts. No mystery.",
      steps: [
        {
          n: "01",
          title: "Get the app",
          body: "Coming soon to Google Play. Until then, the code is open on GitHub — you can read it, audit it, and contribute.",
        },
        {
          n: "02",
          title: "Download the engines once",
          body: "The first time, you choose on the phone what you need to listen and translate. After that, you don’t need the internet.",
        },
        {
          n: "03",
          title: "Speak live",
          body: "You turn on the mic and the translation appears instantly. You control the device. No one else is listening.",
        },
      ],
    },
    privacy: {
      title: "Your conversation stays on your phone",
      body: "After the first download, Puente works without a network — even in airplane mode. Audio is processed on the device and is not saved. Real privacy, not fine print.",
    },
    models: {
      title: "You choose for your phone",
      lead: "No unnecessary jargon: different sizes so it runs well on more devices.",
      whisperTitle: "Listening",
      whisperBody:
        "Whisper Tiny, Base, or Small: faster, balanced, or more precise. You decide based on your device memory.",
      nllbTitle: "Translation",
      nllbBody:
        "NLLB is the translation engine: hundreds of language pairs, built to run on a phone.",
      note: "The download takes space; pick what fits your phone best.",
    },
    community: {
      title: "From the community, for the community",
      body: "Puente is free software under the MIT license: free, auditable, and modifiable. Made by Pablo Vallejo — one person, not a company waiting for the next funding cycle.",
      cta: "Open the repository",
    },
    institutional: {
      title: "Not waiting on the fiscal year",
      body: "While Brussels waits for grants to mature, useful work can already fit on a phone. Puente exists for people who need to understand each other today — not next fiscal year.",
    },
    closing: {
      title: "Puente — a bridge between civilizations",
      body: "Offline. Free. Open source. Start by looking at the code; Google Play arrives in the coming weeks.",
      ctaPrimary: "View code on GitHub",
      ctaSecondary: "Coming soon to Google Play",
    },
    footer: {
      license: "MIT License",
      by: "Made by Pablo Vallejo",
      rights: "© 2026 Pablo Vallejo",
    },
  },
} as const;

export type Ui = (typeof ui)[Locale];

export function t(locale: Locale): Ui {
  return ui[locale];
}

export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\//, "");
  if (locale === defaultLocale) return clean ? `/${clean}` : "/";
  return clean ? `/${locale}/${clean}` : `/${locale}/`;
}

export const localeNames: Record<Locale, string> = {
  es: "ES",
  ca: "CA",
  en: "EN",
};
