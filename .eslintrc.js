module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "linebreak-style": ["error", "unix"]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};

//process.platform === "win32" ? 0 : ["error", "unix"]
