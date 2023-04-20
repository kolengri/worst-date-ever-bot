import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  preset: 'ts-jest',
  testMatch: ['**/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
  collectCoverageFrom: ['src/**/*.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
