// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // target: "static",
  generate: {
    fallback: true,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-gtag"],

  css: ["@/assets/css/styles.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  gtag: {
    id: "G-K5G86J0CJD",
  },
});
