import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier/flat";

export default [
  { ignores: ["node_modules/", "coverage/"] },
  js.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: { sourceType: "commonjs", globals: globals.node },
  },
  {
    files: ["public/**/*.js"],
    languageOptions: { sourceType: "script", globals: globals.browser },
  },
  {
    files: ["**/*.mjs"],
    languageOptions: { sourceType: "module", globals: globals.node },
  },
  { rules: { "no-unused-vars": ["error", { argsIgnorePattern: "^_" }] } },
  prettier,
];
