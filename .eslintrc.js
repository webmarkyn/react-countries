module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-restricted-exports': 0,
    'no-default-export': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'react/jsx-wrap-multilines': 0,
    'no-confusing-arrow': 0,
    'function-paren-newline': 0,
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 0,
    indent: 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
