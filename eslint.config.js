import js from '@eslint/js';
import globals from 'globals';

export default [
  { ignores: ['dist/**', 'node_modules/**', '.agents/**'] },
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: { globals: globals.browser }
  },
  {
    files: ['scripts/**/*.{js,mjs}', 'config/**/*.js', '*.config.js'],
    languageOptions: { globals: globals.node }
  },
  {
    files: ['scripts/test_responsive_master.mjs', 'scripts/verify-images.mjs', 'scripts/verify-mobile-fix.mjs'],
    languageOptions: { globals: globals.browser }
  },
  {
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
      'no-constant-binary-expression': 'error',
      'eqeqeq': ['error', 'always']
    }
  }
];
