import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

// eslint.config.js
export default [
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended
  ),
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
];
