/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: '@agaroot/eslint-config-common',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  ignorePatterns: ['**/dist/**/*'],
};
