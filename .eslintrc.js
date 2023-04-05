const path = require('path');

module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@Components', path.resolve(__dirname, 'src/components/')],
          ['@UIkit', path.resolve(__dirname, 'src/UIkit/')],
          ['@Assets', path.resolve(__dirname, 'src/assets/')],
          ['@Helpers', path.resolve(__dirname, 'src/helpers/')],
          ['@Utils', path.resolve(__dirname, 'src/utils/')],
          ['@Api', path.resolve(__dirname, 'src/api/')],
          ['@Layouts', path.resolve(__dirname, 'src/layouts/')],
          ['@Routes', path.resolve(__dirname, 'src/routes/')],
          ['@Pages', path.resolve(__dirname, 'src/pages/')],
          ['@Store', path.resolve(__dirname, 'src/store/')],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'import/no-unresolved': [
      0,
      {
        commonjs: true,
        amd: true,
      },
    ],
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '@Components/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@UIkit/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@Assets/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@Helpers/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@Layouts/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@Utils/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@Pages/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@Routes/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@Store/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@Api/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './*.types',
            group: 'index',
            position: 'after',
          },
          {
            pattern: './*.scss',
            group: 'index',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],

    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'linebreak-style': [0],
    'max-len': [2, 80],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'object-curly-newline': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-underscore-dangle': 'off',
  },
};
