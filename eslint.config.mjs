import antfu from '@antfu/eslint-config'
import tsEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import promisePlugin from 'eslint-plugin-promise'
import securityPlugin from 'eslint-plugin-security'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix'
import vueScopedCssPlugin from 'eslint-plugin-vue-scoped-css'
import vueEslintParser from 'vue-eslint-parser'

export default antfu(
  {
    extends: ['prettier'],
    ignores: ['node_modules/**', '.nuxt/**', 'dist/**', 'public/**', '.codacy/**'],
    jsonc: false,
    markdown: false,
    prettier: false,
    toml: false,
    typescript: true,
    vue: true,
    yaml: false,
  },
  {
    files: ['**/*.{js,ts,vue,cjs,mjs}'],

    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        parser: tsParser,
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint,
      prettier: prettierPlugin,
      promise: promisePlugin,
      security: securityPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'sort-keys-fix': sortKeysFixPlugin,
      'vue-scoped-css': vueScopedCssPlugin,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

      eqeqeq: ['error', 'always'],

      'no-var': 'error',

      'prefer-const': 'error',

      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          bracketSpacing: true,
          printWidth: 120,
          semi: false,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          useTabs: false,
        },
      ],

      'promise/always-return': 'error',
      'promise/catch-or-return': 'error',
      'promise/no-nesting': 'warn',
      'promise/no-promise-in-callback': 'warn',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error',

      'security/detect-object-injection': 'warn',

      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',

      'sort-keys-fix/sort-keys-fix': 'warn',

      'style/quote-props': 'off',

      'vue-scoped-css/no-unused-selector': 'warn',
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      'vue/html-self-closing': [
        'error',
        {
          html: { component: 'always', normal: 'always', void: 'always' },
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
)
