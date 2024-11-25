export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1', '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '\\.(css|less)$': 'identity-obj-proxy',
  }
};
