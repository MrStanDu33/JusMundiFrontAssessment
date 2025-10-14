// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    [
      '@nuxt/eslint',
      {
        extendConfig: {
          rules: {
            'prettier/prettier': [
              'error',
              {
                arrowParens: 'avoid',
                bracketSpacing: true,
                printWidth: 120,
                semi: false,
                singleQuote: true,
                tabWidth: 2,
                trailingComma: 'es5',
                useTabs: false,
              },
            ],
          },
        },
      },
    ],
    [
      '@nuxt/fonts',
      {
        families: [
          {
            global: true,
            name: 'IBM Plex Sans',
            weights: [400, 500, 700],
            preload: true,
            display: 'swap',
            provider: 'google',
          },
          {
            global: true,
            name: 'larken',
            weights: [300, 400, 700, 800],
            preload: true,
            display: 'swap',
            provider: 'local',
          },
          {
            global: true,
            name: 'icons',
            weights: [400],
            preload: true,
            display: 'swap',
            provider: 'local',
          },
        ],
      },
    ],
  ],

  typescript: {
    strict: true,
  },
})
