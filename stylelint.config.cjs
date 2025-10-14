module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue', 'stylelint-prettier/recommended'],
  ignoreFiles: ['node_modules/**', '.nuxt/**', '.output/**'],
  plugins: ['stylelint-prettier', 'stylelint-order', 'stylelint-scss', 'stylelint-declaration-strict-value'],
  root: true,
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    'block-no-empty': true,

    'color-no-invalid-hex': true,

    'declaration-block-no-duplicate-properties': true,

    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,

    'function-calc-no-unspaced-operator': true,

    'max-nesting-depth': 3,

    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,

    'property-no-unknown': true,

    'scale-unlimited/declaration-strict-value': [
      ['/color$/', 'z-index', 'font-size', 'spacing'],
      {
        disableFix: true,
        ignoreValues: ['inherit', 'transparent', 'none', 'initial'],
      },
    ],

    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/dollar-variable-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'scss/load-partial-extension': 'never',

    'selector-max-compound-selectors': 3,
    'selector-pseudo-class-no-unknown': true,
    'selector-type-no-unknown': true,

    'string-no-newline': true,

    'unit-no-unknown': true,
    'declaration-property-value-no-unknown': null,
  },
}
