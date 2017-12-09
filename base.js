module.exports = {
  extends: ['eslint:recommended', 'google'],

  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports:'always-multiline',
      functions: 'always-multiline',
    }],

    'linebreak-style': 'off',

    'max-len': ['error', {
      code: 80,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],

    'object-curly-spacing': ['error', 'always'],
    'arrow-body-style': ['error', 'always'],
    'prefer-const': 'error',
  },
};
