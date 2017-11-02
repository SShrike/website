module.exports = {
  parser: 'babel-eslint',
  extends: [
    'google',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['react', 'import', 'jsx-a11y', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2016,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },

  rules: {
    strict: 0,
    'require-jsdoc': 0,
    // Breaks using arrow functions in React components.
    'no-invalid-this': 0,
    'react/prop-types': 0,
    'prettier/prettier': 'error',
    'jsx-a11y/label-has-for': 0,
  },
};
