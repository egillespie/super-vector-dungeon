// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // A list of paths to directories that Jest should use to search for files in
  roots: [
    '<rootDir>/src/',
    '<rootDir>/tests/'
  ],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // Shorten the syntax to import modules from /src
  modulePaths: [
    '<rootDir>/src'
  ],

  // Replace /src/ in imports with test-accessible path
  moduleNameMapper: {
    '/src/(.*)': '<rootDir>/src/$1'
  }
}
