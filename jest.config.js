const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  bail: true,
  verbose: true,
  silent: true,
  rootDir: process.cwd(),
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!<rootDir>/node_modules',
  ],
  coverageReporters: ['lcov', 'text', 'html'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/index.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
