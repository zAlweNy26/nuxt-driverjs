export default defineNuxtConfig({
  modules: ['../src/module'],
  driver: {
    autoImport: true,
    provide: true
  },
  devtools: { enabled: true }
})
