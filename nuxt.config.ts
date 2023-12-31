// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/webportal/'
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content'
  ],
  css : [
    'bootstrap/dist/css/bootstrap.css'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
