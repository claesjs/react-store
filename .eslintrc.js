module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    'react',
    'flowtype'
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
    'shared-node-browser': true
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect'
    }
  }
};
