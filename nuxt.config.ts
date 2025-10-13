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
        defaults: {
          weights: [400, 500, 700],
        },
        families: [
          {
            global: true,
            name: 'IBM Plex Sans',
            provider: 'google',
          },
        ],
        provider: 'google',
      },
    ],
  ],

  typescript: {
    strict: true,
    typeCheck: true,
  },
})
