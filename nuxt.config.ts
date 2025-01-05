// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { version } from './package.json'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appVersion: version,
    },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  image: {
    // Options
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image',
    '@hypernym/nuxt-anime',
    '@vueuse/nuxt',
    'v-gsap-nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  css: ['@mdi/font/css/materialdesignicons.css'],

  build: {
    transpile: ['vuetify'],
  },

  vgsap: {
    presets: [],
    breakpoint: 768,
    scroller: '',
    composable: true,
  },

  compatibilityDate: '2024-12-19',
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
