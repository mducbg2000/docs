import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  extends: ["docus"],
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
  ],
  site: {
    name: "DucNM Docs",
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "vi",
        name: "Tiếng Việt",
      },
    ],
  },
});
