// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "vue3-carousel-nuxt"],
  carousel: {
    prefix: "C",
  },
  // plugins: [{ src: "~/plugins/router.scrollBehavior.ts", mode: "client" }],
});
