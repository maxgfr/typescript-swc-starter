import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    transform: {
      '^.+\\.(t|j)s$': '@swc/jest',
    },
    transformIgnorePatterns: [],
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/dist/'],
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
  };
};
