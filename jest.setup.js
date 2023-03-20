// const { compilerOptions } = require('./tsconfig.json');
const {defaults: tsjPreset } = require('ts-jest/presets');
// const { pathsToModuleNameMapper } = require('ts-jest');


module.exports = {
  transform: {
    ...tsjPreset.transform,
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2|pdf)$': 'jest-transform-stub',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^routes/(.*)$': '<rootDir>/src/routes/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^hoc/(.*)$': '<rootDir>/src/hoc/$1',
    '^__test__/(.*)$': '<rootDir>/src/__test__/$1',
    '^mocks/(.*)$': '<rootDir>/src/mocks/$1',
   },
   collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/index.{ts,tsx}',
    '!src/serviceWorker.{ts,tsx}',
    '!src/mocks/**/*.{js,jsx,ts,tsx}',
  ],
}