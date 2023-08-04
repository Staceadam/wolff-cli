/** @type {import("eslint").Linter.Config} EslintConfig */
/** @typedef  {import("prettier").Config} PrettierConfig*/

/** @type { PrettierConfig | EslintConfig } */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        printWidth: 100,
        singleQuote: true,
        jsxSingleQuote: true,
        semi: false,
        trailingComma: "all",
        tabWidth: 2,
      },
    ],
  },
}
