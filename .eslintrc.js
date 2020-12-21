module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    quotes: "off",
    semi: "off",
    "no-trailing-spaces": "off",
    "comma-dangle": "off",
    "space-before-function-paren": "off",
    "eol-last": "off",
    "vue/order-in-components": "off"
  }
};
