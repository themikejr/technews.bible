// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // target: "static",
  generate: {
    fallback: true,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],

  css: ["@/assets/css/styles.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
