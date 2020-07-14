module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true
  },
  plugins: ['babel'],
  rules: {
    semi: ['error', 'never'],
    'max-len': 'off',
    'func-names': 'off',
    'no-param-reassign': ['error', { props: false }],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],

    // Replace default rules with babel plugin to correctly support optional chaining
    'no-unused-expressions': 'off',
    'camelcase': 'off',
    'babel/no-unused-expressions': 'error',
    'babel/camelcase': ['error', { properties: 'never' }],
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        'alias': {
          '@': './src'
        }
      }
    }
  }
}
