module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  rules: {
    "linebreak-style": "off",

    "arrow-parens": "off",
    "object-curly-newline": "off",
    "no-mixed-operators": "off",
    "arrow-body-style": "off",
    "function-paren-newline": "off",
    "no-plusplus": "off",
    "space-before-function-paren": 0,

    quotes: [2, "single", { avoidEscape: true }],
    "max-len": ["error", 100, 2, { ignoreUrls: true }],
    "no-console": "error",
    "no-alert": "error",
  },
  settings: {
    "import/resolver": {
      nuxt: {
        extensions: [".js", ".ts"],
      },
    },
  },
};
