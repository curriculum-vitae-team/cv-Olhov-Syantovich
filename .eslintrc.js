module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.eslint.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier', 'react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off'
  }
};
