import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default defineConfig([
  {
    ignores: ['node_modules/**', 'dist/**', 'public/**', '**/*.lock', '.astro/**', '**/*.json'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{tsx,jsx}'],
    plugins: { react },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
  {
    ...astroPlugin.configs.recommended[0],
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
      },
      globals: {
        URL: 'readonly',
      },
    },
  },
  {
    files: ['astro.config.mjs', '*.config.js', '*.config.mjs'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
      sourceType: 'module',
      ecmaVersion: 2022,
    },
    rules: {
      // specific rules for config files
    },
  },
]);
