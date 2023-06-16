// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  generate: {
    fallback: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-gtag",
    "@nuxtjs/robots",
  ],

  css: ["@/assets/css/styles.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  content: {
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          "rehype-external-links",
          {
            target: "_blank",
            // content: {
            //   type: "element",
            //   tagName: "icon-external-link",
            //   properties: {
            //     className: ["w-4", "h-4", "ml-1", "-mt-1"],
            //   },
            // },
            //   contentProperties: {
            //     className: [
            //       "inline-block",
            //       "align-middle",
            //       "text-gray-600",
            //       "dark:text-gray-400",
            //     ],
            //   },
          },
        ],
      ],
    },
  },

  gtag: {
    id: "G-K5G86J0CJD",
  },
});
