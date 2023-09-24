// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Batara Blog"
    }
  },

  //module

  modules: [
    '@nuxtjs/tailwindcss',
    '@headlessui/vue',
    '@heroicons/vue'
  ]
  
})
