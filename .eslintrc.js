module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      // Дополнительные правила по необходимости
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };
  