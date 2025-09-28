import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  components: true,
  app: {
    head: {
      titleTemplate: 'Proyecto 1 Arquitectura - Sofia Rubie y Rafael Cerdas',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Meta description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,300,600' },
      ]
    }
  },
  nitro: {
    preset: 'static',
    output: {
      publicDir: 'dist'
    }
  }
})
