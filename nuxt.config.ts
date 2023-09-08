// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: "en",
            name: "English",
          },
          {
            code: "fr",
            name: "Français",
          },
        ],
        defaultLocale: "fr",
        vueI18n: "./nuxt-i18n.js",
      },
    ],
  ]
})
