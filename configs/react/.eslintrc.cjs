/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    './node_modules/@nostalgic-ui/config-common/.eslintrc.cjs',
    '@agaroot/eslint-config-react',
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
  rules: {
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          props: false,
          ref: false,
        },
      },
    ],
  },
};
