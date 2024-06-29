module.exports = {
    projects: [
      {
        displayName: "Unit Tests",
        testMatch: ["<rootDir>/__tests__/**/*.test.js"],
        testPathIgnorePatterns: [
          '<rootDir>/node_modules/',
          '<rootDir>/__tests__/lib'
        ],
        testEnvironment: 'node',
      },
      "<rootDir>/__tests__/"
    ],
    reporters: ['default', '.']
  };