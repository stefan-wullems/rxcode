/* eslint-disable no-undef */
module.exports = {
  'transform': {'^.+\\.svelte$': 'svelte-jester', '^.+\\.js$': 'babel-jest'},
  'moduleFileExtensions': ['js', 'svelte'],
  'setupFilesAfterEnv': ['@testing-library/jest-dom/extend-expect']
}
