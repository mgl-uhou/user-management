import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";


export default defineConfig([
  globalIgnores([ "dist/**/*" ]),
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  tseslint.configs.recommended,
  { rules: {
    indent: [ "error", 2, { SwitchCase: 1 }],
    semi: [ "error", "always" ],
    quotes: [ "error", "double" ],
    "linebreak-style": [ "error", "unix" ],
    "no-tabs": [ "error", { allowIndentationTabs: false } ],
    "eol-last": [ "error", "always" ],
    "no-trailing-spaces": "error",
    "@typescript-eslint/no-empty-interface": "off",
  } },
]);
