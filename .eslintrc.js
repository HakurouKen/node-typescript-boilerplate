module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off'
  }
};
