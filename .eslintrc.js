module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/recommended',
    'standard'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
