// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module', '@vueuse/nuxt'],
  css: ['@/assets/css/main.css'],

  build: {
    transpile: ['vuetify'],
  },

  compatibilityDate: '2024-12-19',
})
