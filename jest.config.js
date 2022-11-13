/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
};
