module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["react-app"],
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
}
