import { defineNuxtModule, addPlugin, createResolver, addImportsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Provides the main `$driver` helper globally.
   * @example
   * ```ts
   * const { $driver } = useNuxtApp()
   * ```
   * @default true
   */
  provide?: boolean
  /**
   * Specifies the `auto-import` feature.
   * If enabled, the composables will be available globally so there is no need to import them manually.
   * Since this is an opinionated feature, you can disable global `auto-import` and use explicit import only where you need it.
   * @default true
   */
  autoImport?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-driverjs',
    configKey: 'driver',
    version: '1.0.0',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },
  defaults: {
    autoImport: true,
    provide: true
  },
  setup (options, nuxt) {
    const { provide, autoImport } = options

    const { resolve } = createResolver(import.meta.url)

    nuxt.options.css.push('driver.js/dist/driver.css')

    nuxt.options.build.transpile.push(resolve('runtime'))

    if (provide) addPlugin(resolve('runtime/plugin'))
    if (autoImport) addImportsDir(resolve('runtime/composables'))
  }
})
