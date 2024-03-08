import { defineNuxtPlugin } from '#app'
import { driver } from 'driver.js'

export default defineNuxtPlugin(() => ({
  provide: { driver }
}))
