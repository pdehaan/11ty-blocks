module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2018
  },
  root: true,
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"]
  }
};
