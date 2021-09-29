module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es6: true,
    browser: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'indent': ['error', 2],
    'no-case-declarations': 0,
    'no-console': 2,
    'no-unused-vars': 2,
    'quotes': ['error', 'single'],
    'require-yield': 0,
    'semi': ['error', 'never'],
  },
};