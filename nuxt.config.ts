// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo'],
  devtools: { 
    enabled: true 
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nativel IMO'
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  apollo: {
    autoImports: true,
    clients: {
      default: {
        //        httpEndpoint: 'http://185.170.214.196:8085/query'
                httpEndpoint: 'http://localhost:8085/query'
      }
    },
  }
})
