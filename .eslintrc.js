module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    'jest',
  ],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': 'off',
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
