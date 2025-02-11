import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-alert': 'error', // Ajout de la règle pour interdire alert()
      'no-ternary': 'warn', // Ajout de la règle pour déclencher un avertissement sur l'opérateur ternaire
      'no-console': ['warn', { allow: ['log'] }], // Avertissement pour console.log(), mais ignoré
    },
  },
];
