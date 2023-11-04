/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    '@agaroot/eslint-config-common',
    '@agaroot/eslint-config-react',
    '@agaroot/eslint-config-next',
  ],
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
};
