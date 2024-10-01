import pluginTypescript from 'typescript-eslint'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginSolid from 'eslint-plugin-solid/configs/typescript'
import pluginTailwindcss from 'eslint-plugin-tailwindcss'

export default pluginTypescript.config(
  ...pluginTypescript.configs.recommended,
  pluginUnicorn.configs['flat/recommended'],
  pluginSolid,
  ...pluginTailwindcss.configs['flat/recommended'],
  {
    rules: {
      'comma-dangle': [1, 'never'],
      'semi': [1, 'never'],

      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],

      'unicorn/empty-brace-spaces': 0,
      'unicorn/filename-case': 0,
      'unicorn/no-empty-file': 0,
      'unicorn/no-keyword-prefix': 0,
      'unicorn/no-null': 0,
      'unicorn/numeric-separators-style': 0,
      'unicorn/prefer-node-protocol': 0,
      'unicorn/prevent-abbreviations': 0,

      'tailwindcss/no-custom-classname': [1, {
        whitelist: ['is-active']
      }]
    }
  }
)