export const locales = ["es", "ca", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";
export const githubUrl = "https://github.com/pablovallejodev/puente";
export const siteName = "Puente";
export const ogLocale: Record<Locale, string> = { es: "es_ES", ca: "ca_ES", en: "en_US" };

export const ui = {
  es: {
    meta: {
      title: "Puente — Habla otro idioma. Sigue siendo tú.",
      description: "Traduce conversaciones en tiempo real desde tu teléfono. Sin conexión, con privacidad y con IA de código abierto. Puente es gratis y está pensado para Android.",
      ogAlt: "Puente — traducción de voz privada y sin conexión.",
    },
    nav: { how: "Cómo funciona", privacy: "Privacidad", project: "El proyecto", code: "GitHub", skip: "Saltar al contenido", langLabel: "Idioma", label: "Navegación principal" },
    hero: {
      eyebrow: "UN MUNDO DE CONVERSACIONES",
      title: "Habla otro idioma.", accent: "Sigue siendo tú.",
      lead: "Tu voz, traducida en tiempo real. Una app gratuita que te ayuda a entenderte en muchos idiomas, incluso sin internet.",
      cta: "Descubre Puente", secondary: "Conoce el proyecto", availability: "Para Android · Próximamente en Google Play",
      imageAlt: "Ilustración de un puente de piedra entre las montañas de Asturias, con personas cruzando sobre un río.",
      caption: "Inspirado en el puente de Cangas de Onís, Asturias.",
      captionEnd: "Un lugar de encuentro.",
      example: "Una conversación con Puente", exampleLabel: "Ejemplo de traducción", from: "Español", to: "Inglés", source: "¿Nos sentamos aquí?", translation: "Shall we sit here?", offline: "Sin conexión", private: "Solo en tu teléfono",
      proofs: ["Sin conexión", "Conversaciones privadas", "Siempre gratis", "Código abierto"],
    },
    features: {
      eyebrow: "MENOS BARRERAS, MÁS CONVERSACIÓN", title: "Lo importante es entenderse.",
      lead: "De viaje, en una nueva ciudad o con alguien que acabas de conocer. Puente te acompaña cuando faltan las palabras.",
      items: [
        { title: "Habla. La traducción te sigue.", body: "Puente escucha y convierte tu voz en texto traducido, en tiempo real. Para que puedas seguir con la conversación." },
        { title: "Llévalo donde no hay cobertura.", body: "Descarga lo necesario una vez y traduce sin wifi ni datos móviles. También en modo avión." },
        { title: "Muchos idiomas. La misma app.", body: "Español, inglés, francés, árabe, japonés y muchos más. Elige el idioma en el que quieres entender lo que escuchas." },
      ],
    },
    how: {
      eyebrow: "ASÍ DE SENCILLO", title: "Prepara tu móvil.\nY empieza a hablar.", lead: "La inteligencia artificial trabaja en tu teléfono. Tú solo tienes que poner la conversación.",
      steps: [
        { n: "01", title: "Descarga una vez", body: "Con conexión a internet, descarga desde la app los modelos de IA que permiten escuchar y traducir." },
        { n: "02", title: "Elige tu idioma", body: "Selecciona a qué idioma traducir. Puente puede detectar el idioma de la persona que habla." },
        { n: "03", title: "Dale al micrófono", body: "Habla y lee la traducción en la pantalla. A partir de aquí, no necesitas conexión." },
      ],
      note: "La app está en desarrollo. Su código ya está disponible; la publicación en Google Play está pendiente.",
    },
    privacy: {
      eyebrow: "PRIVADA POR DISEÑO", title: "Entre tú y quien\nestá al otro lado.",
      body: "Tus conversaciones son tuyas. Puente utiliza modelos de IA de código abierto para traducir directamente en tu móvil, sin enviar tu voz a un servidor.",
      points: ["El audio no sale de tu dispositivo.", "Tu voz se procesa, no se guarda.", "La traducción funciona sin internet."],
      visualTitle: "Tu conversación se queda aquí.", visualNote: "Procesada en tu teléfono", label: "Privacidad", status: "Sin enviar audio a la nube",
    },
    community: {
      eyebrow: "ABIERTO A TODO EL MUNDO", title: "Gratis para usar.\nAbierto para mejorar.",
      body: "Creemos que entenderse debería estar al alcance de cualquiera. Por eso Puente es un proyecto gratuito y de código abierto, creado por Pablo Vallejo y abierto a quien quiera aportar.",
      detail: "Puedes explorar cómo funciona, proponer ideas o ayudar a mejorarlo. Cada aportación cuenta.", cta: "El proyecto en GitHub", license: "Código abierto · Licencia MIT",
    },
    faq: {
      title: "Unas cosas más,\npor si te lo preguntas.",
      items: [
        { question: "¿Necesito internet para usar Puente?", answer: "Solo para descargar la app y los modelos de IA al principio. Una vez preparados, la voz y la traducción se procesan en el teléfono y puedes usar Puente sin wifi ni datos móviles." },
        { question: "¿Es realmente gratis?", answer: "Sí. Puente es un proyecto gratuito y de código abierto. Puedes consultar, modificar y compartir el código de la app bajo la licencia MIT." },
        { question: "¿Qué idiomas puedo utilizar?", answer: "Puente permite traducir entre muchos idiomas, incluidos español, catalán, inglés, francés, alemán, árabe, chino y japonés. La disponibilidad y la precisión dependen del idioma y de los modelos que utilices." },
        { question: "¿Cuándo podré descargar la app?", answer: "Estamos preparando Puente para Android. La publicación en Google Play está pendiente, sin una fecha anunciada. Mientras tanto, puedes seguir el desarrollo y consultar el código en GitHub." },
        { question: "¿Funcionará en mi teléfono?", answer: "Puente está pensado para Android. Los modelos necesitan espacio de almacenamiento y la velocidad de traducción depende de la memoria y la potencia del teléfono. La app permite elegir entre distintos tamaños de modelo." },
      ],
    },
    closing: { title: "La próxima conversación,\nun poco más cerca.", body: "Sin conexión. Con privacidad. Para todos.", cta: "Conoce Puente en GitHub", note: "Próximamente en Google Play" },
    footer: { tagline: "Un puente entre idiomas.", license: "Licencia MIT", by: "Un proyecto de Pablo Vallejo", rights: "© 2026 Puente" },
  },
  ca: {
    meta: {
      title: "Puente — Parla un altre idioma. Continua sent tu.",
      description: "Tradueix converses en temps real des del telèfon. Sense connexió, amb privacitat i amb IA de codi obert. Puente és gratuït i està pensat per a Android.",
      ogAlt: "Puente — traducció de veu privada i sense connexió.",
    },
    nav: { how: "Com funciona", privacy: "Privacitat", project: "El projecte", code: "GitHub", skip: "Salta al contingut", langLabel: "Idioma", label: "Navegació principal" },
    hero: {
      eyebrow: "UN MÓN DE CONVERSES", title: "Parla un altre idioma.", accent: "Continua sent tu.",
      lead: "La teva veu, traduïda en temps real. Una app gratuïta que t’ajuda a entendre’t en molts idiomes, fins i tot sense internet.",
      cta: "Descobreix Puente", secondary: "Coneix el projecte", availability: "Per a Android · Aviat a Google Play",
      imageAlt: "Il·lustració d’un pont de pedra entre les muntanyes d’Astúries, amb persones travessant un riu.",
      caption: "Inspirat en el pont de Cangas de Onís, Astúries.", captionEnd: "Un lloc de trobada.",
      example: "Una conversa amb Puente", exampleLabel: "Exemple de traducció", from: "Català", to: "Anglès", source: "Seiem aquí?", translation: "Shall we sit here?", offline: "Sense connexió", private: "Només al teu telèfon",
      proofs: ["Sense connexió", "Converses privades", "Sempre gratuït", "Codi obert"],
    },
    features: {
      eyebrow: "MENYS BARRERES, MÉS CONVERSA", title: "L’important és entendre’s.",
      lead: "De viatge, en una ciutat nova o amb algú que acabes de conèixer. Puente t’acompanya quan falten les paraules.",
      items: [
        { title: "Parla. La traducció et segueix.", body: "Puente escolta i converteix la teva veu en text traduït, en temps real. Perquè puguis continuar amb la conversa." },
        { title: "Porta’l on no hi ha cobertura.", body: "Descarrega el que cal una vegada i tradueix sense wifi ni dades mòbils. També en mode avió." },
        { title: "Molts idiomes. La mateixa app.", body: "Català, castellà, anglès, àrab, japonès i molts més. Tria l’idioma en què vols entendre el que escoltes." },
      ],
    },
    how: {
      eyebrow: "AIXÍ DE SENZILL", title: "Prepara el mòbil.\nI comença a parlar.", lead: "La intel·ligència artificial treballa al teu telèfon. Tu només hi has de posar la conversa.",
      steps: [
        { n: "01", title: "Descarrega una vegada", body: "Amb connexió a internet, descarrega des de l’app els models d’IA que permeten escoltar i traduir." },
        { n: "02", title: "Tria el teu idioma", body: "Selecciona a quin idioma vols traduir. Puente pot detectar l’idioma de la persona que parla." },
        { n: "03", title: "Activa el micròfon", body: "Parla i llegeix la traducció a la pantalla. A partir d’aquí, no necessites connexió." },
      ],
      note: "L’app està en desenvolupament. El codi ja està disponible; la publicació a Google Play està pendent.",
    },
    privacy: {
      eyebrow: "PRIVADA PER DISSENY", title: "Entre tu i qui\nhi ha a l’altra banda.",
      body: "Les teves converses són teves. Puente utilitza models d’IA de codi obert per traduir directament al mòbil, sense enviar la veu a cap servidor.",
      points: ["L’àudio no surt del dispositiu.", "La teva veu es processa, no es desa.", "La traducció funciona sense internet."],
      visualTitle: "La conversa es queda aquí.", visualNote: "Processada al teu telèfon", label: "Privacitat", status: "Sense enviar àudio al núvol",
    },
    community: {
      eyebrow: "OBERT A TOTHOM", title: "Gratuït per fer servir.\nObert per millorar.",
      body: "Creiem que entendre’s hauria d’estar a l’abast de tothom. Per això Puente és un projecte gratuït i de codi obert, creat per Pablo Vallejo i obert a qui vulgui aportar-hi.",
      detail: "Pots explorar com funciona, proposar idees o ajudar a millorar-lo. Cada aportació compta.", cta: "El projecte a GitHub", license: "Codi obert · Llicència MIT",
    },
    faq: {
      title: "Algunes coses més,\nper si t’ho preguntes.",
      items: [
        { question: "Necessito internet per fer servir Puente?", answer: "Només per descarregar l’app i els models d’IA al principi. Un cop preparats, la veu i la traducció es processen al telèfon i pots fer servir Puente sense wifi ni dades mòbils." },
        { question: "És realment gratuït?", answer: "Sí. Puente és un projecte gratuït i de codi obert. Pots consultar, modificar i compartir el codi de l’app sota la llicència MIT." },
        { question: "Quins idiomes puc utilitzar?", answer: "Puente permet traduir entre molts idiomes, com ara català, castellà, anglès, francès, alemany, àrab, xinès i japonès. La disponibilitat i la precisió depenen de l’idioma i dels models que utilitzis." },
        { question: "Quan podré descarregar l’app?", answer: "Estem preparant Puente per a Android. La publicació a Google Play està pendent, sense una data anunciada. Mentrestant, pots seguir el desenvolupament i consultar el codi a GitHub." },
        { question: "Funcionarà al meu telèfon?", answer: "Puente està pensat per a Android. Els models necessiten espai d’emmagatzematge i la velocitat de traducció depèn de la memòria i la potència del telèfon. L’app permet triar entre diferents mides de model." },
      ],
    },
    closing: { title: "La propera conversa,\nuna mica més a prop.", body: "Sense connexió. Amb privacitat. Per a tothom.", cta: "Coneix Puente a GitHub", note: "Aviat a Google Play" },
    footer: { tagline: "Un pont entre idiomes.", license: "Llicència MIT", by: "Un projecte de Pablo Vallejo", rights: "© 2026 Puente" },
  },
  en: {
    meta: {
      title: "Puente — Another language. Still you.",
      description: "Translate conversations in real time on your phone. Offline, private and powered by open-source AI. Puente is free and designed for Android.",
      ogAlt: "Puente — private, offline voice translation.",
    },
    nav: { how: "How it works", privacy: "Privacy", project: "The project", code: "GitHub", skip: "Skip to content", langLabel: "Language", label: "Main navigation" },
    hero: {
      eyebrow: "A WORLD OF CONVERSATIONS", title: "Another language.", accent: "Still you.",
      lead: "Your voice, translated in real time. A free app that helps you connect in many languages, even without the internet.",
      cta: "Discover Puente", secondary: "Meet the project", availability: "For Android · Coming to Google Play",
      imageAlt: "Illustration of a stone bridge in the mountains of Asturias, with people crossing above a river.",
      caption: "Inspired by the bridge in Cangas de Onís, Asturias.", captionEnd: "A place to meet.",
      example: "A conversation with Puente", exampleLabel: "Translation example", from: "English", to: "Spanish", source: "Shall we sit here?", translation: "¿Nos sentamos aquí?", offline: "Offline", private: "Only on your phone",
      proofs: ["Works offline", "Private conversations", "Always free", "Open source"],
    },
    features: {
      eyebrow: "FEWER BARRIERS, MORE CONVERSATION", title: "Understanding comes first.",
      lead: "On a trip, in a new city or with someone you’ve just met. Puente is there when you can’t find the words.",
      items: [
        { title: "You speak. Translation follows.", body: "Puente listens and turns your voice into translated text, in real time. So you can keep the conversation going." },
        { title: "Take it beyond the signal.", body: "Download what you need once and translate without wifi or mobile data. Even in airplane mode." },
        { title: "Many languages. One app.", body: "English, Spanish, French, Arabic, Japanese and many more. Choose the language you want to understand what you hear in." },
      ],
    },
    how: {
      eyebrow: "THAT SIMPLE", title: "Get your phone ready.\nThen start talking.", lead: "The AI works on your phone. All you need to bring is the conversation.",
      steps: [
        { n: "01", title: "Download once", body: "With an internet connection, download the AI models for listening and translating from within the app." },
        { n: "02", title: "Choose your language", body: "Select the language to translate into. Puente can detect the language of the person speaking." },
        { n: "03", title: "Turn on the microphone", body: "Speak and read the translation on screen. From here on, you don’t need a connection." },
      ],
      note: "The app is in development. The source code is already available; the Google Play release is still to come.",
    },
    privacy: {
      eyebrow: "PRIVATE BY DESIGN", title: "Between you and\nthe person with you.",
      body: "Your conversations belong to you. Puente uses open-source AI models to translate directly on your phone, without sending your voice to a server.",
      points: ["Audio never leaves your device.", "Your voice is processed, not stored.", "Translation works without the internet."],
      visualTitle: "Your conversation stays here.", visualNote: "Processed on your phone", label: "Privacy", status: "No audio sent to the cloud",
    },
    community: {
      eyebrow: "OPEN TO EVERYONE", title: "Free to use.\nOpen to make better.",
      body: "We believe understanding each other should be within everyone’s reach. That’s why Puente is a free, open-source project, created by Pablo Vallejo and open to anyone who wants to contribute.",
      detail: "Explore how it works, suggest an idea or help improve it. Every contribution matters.", cta: "The project on GitHub", license: "Open source · MIT license",
    },
    faq: {
      title: "A few more things\nyou might be wondering.",
      items: [
        { question: "Do I need the internet to use Puente?", answer: "Only to download the app and AI models at the start. Once they’re ready, voice and translation are processed on your phone and you can use Puente without wifi or mobile data." },
        { question: "Is it really free?", answer: "Yes. Puente is a free, open-source project. You can read, modify and share the app’s code under the MIT license." },
        { question: "Which languages can I use?", answer: "Puente supports translation between many languages, including English, Spanish, Catalan, French, German, Arabic, Chinese and Japanese. Availability and accuracy depend on the language and the models you use." },
        { question: "When can I download the app?", answer: "We’re preparing Puente for Android. The Google Play release is still to come, with no announced date. In the meantime, you can follow development and explore the code on GitHub." },
        { question: "Will it work on my phone?", answer: "Puente is designed for Android. The models need storage space, and translation speed depends on your phone’s memory and processing power. The app lets you choose between different model sizes." },
      ],
    },
    closing: { title: "Your next conversation,\na little closer.", body: "Offline. Private. For everyone.", cta: "Meet Puente on GitHub", note: "Coming to Google Play" },
    footer: { tagline: "A bridge between languages.", license: "MIT license", by: "A project by Pablo Vallejo", rights: "© 2026 Puente" },
  },
} as const;

export type Ui = (typeof ui)[Locale];
export function t(locale: Locale): Ui { return ui[locale]; }
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\//, "");
  if (locale === defaultLocale) return clean ? `/${clean}` : "/";
  return clean ? `/${locale}/${clean}` : `/${locale}/`;
}
export const localeNames: Record<Locale, string> = { es: "ES", ca: "CA", en: "EN" };
