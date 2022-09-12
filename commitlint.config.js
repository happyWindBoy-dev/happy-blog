module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'update',
        'fix',
        'refactor',
        'optimize',
        'style',
        'docs',
        'chore',
      ],
    ],
    'type-case': [0],
    'type-empty': [2, 'never'],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
};
