module.exports = {
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
    'require-jsdoc': 0,
    'react/prop-types': 0,
    'prettier/prettier': 'error',
  },
};
