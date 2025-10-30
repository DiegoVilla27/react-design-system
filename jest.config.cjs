/**
 * Jest configuration for the React Design System repository.
 *
 * Purpose:
 * - Provide a predictable test environment (jsdom) for component/unit tests.
 * - Configure transformers for TypeScript and modern JavaScript.
 * - Map static assets and styles to mocks for Node runtime.
 * - Collect coverage and enforce global thresholds.
 *
 * Notes:
 * - ts-jest uses tsconfig.app.json to align with project compilation settings.
 * - Identity-object-proxy is used to stub CSS module imports in tests.
 * - Adjust `collectCoverageFrom` globs to include/exclude desired files.
 */
module.exports = {
  /**
   * testEnvironment
   *
   * Environment used to simulate a browser-like DOM for component tests.
   * 'jsdom' is appropriate for React component testing.
   */
  testEnvironment: 'jsdom',

  /**
   * transform
   *
   * Map file patterns to transformers so Jest can execute TypeScript/JSX.
   * - ts-jest: transpiles .ts/.tsx using the provided tsconfig.
   * - babel-jest: transpiles modern JS/JSX.
   */
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.app.json', // ensure tests follow same TS settings
      },
    ],
    '^.+\\.(js|jsx)$': 'babel-jest'
  },

  /**
   * moduleNameMapper
   *
   * Stub out static asset and CSS imports so tests run without bundler support.
   * - CSS modules use identity-obj-proxy for predictable class name access.
   * - Static files map to a simple file mock implementation.
   */
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|png|jpg|jpeg|svg)$': '<rootDir>/test/__mocks__/fileMock.js'
  },

  /**
   * setupFilesAfterEnv
   *
   * Modules run after the test framework is installed in the environment.
   * Use this to register custom matchers, global mocks, or test utilities.
   */
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  /**
   * testMatch
   *
   * Glob patterns Jest uses to detect test files in the project.
   * Supports *.spec.* and *.test.* conventions for JS/TS and JSX/TSX.
   */
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],

  /**
   * testPathIgnorePatterns
   *
   * Paths to ignore when searching for tests (build outputs, deps).
   */
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  /**
   * collectCoverage
   *
   * Whether to collect coverage information during test runs.
   */
  collectCoverage: true,

  /**
   * collectCoverageFrom
   *
   * Globs that determine which source files contribute to coverage reports.
   * Exclusions are useful for type declarations and entry/barril files.
   */
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',   // include source files
    '!src/**/*.d.ts',      // exclude type declaration files
    '!src/main.tsx',       // exclude app entry point
    '!src/**/index.ts'     // exclude barrel/index files
  ],

  /**
   * coverageThreshold
   *
   * Enforce minimum coverage percentages to prevent regressions.
   * Adjust thresholds per project requirements.
   */
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};