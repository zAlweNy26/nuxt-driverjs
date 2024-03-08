# Nuxt driver.js Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module for the [driver.js](https://driverjs.com) library.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-driverjs?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Helps you integrate the driver.js library
- Provides the main $driver helper globally
- Zero-config setup ready to go
- TypeScript friendly
- Super easy to use

## Quick Setup

1. Add `nuxt-driverjs` dependency to your project

    ```bash
    # Using pnpm
    pnpm add -D nuxt-driverjs

    # Using yarn
    yarn add --dev nuxt-driverjs

    # Using npm
    npm install --save-dev nuxt-driverjs
    ```

2. Add `nuxt-driverjs` to the `modules` section of `nuxt.config.ts`

    ```js
    export default defineNuxtConfig({
      modules: [
        'nuxt-driverjs'
      ]
    })
    ```

That's it! You can now use Nuxt driver.js Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-driverjs/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-driverjs

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-driverjs.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-driverjs

[license-src]: https://img.shields.io/npm/l/nuxt-driverjs.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-driverjs

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
