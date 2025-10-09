module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.app.json',
      },
    ],
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|png|jpg|jpeg|svg)$': '<rootDir>/test/__mocks__/fileMock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  // ✅ Recolectar cobertura
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',   // Archivos de los que quieres cobertura
    '!src/**/*.d.ts',      // Excluir definiciones de tipos
    '!src/main.tsx',       // Excluir entry point
    '!src/**/index.ts'     // Excluir archivos de barril
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
