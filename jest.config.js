module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    testPathIgnorePatterns: ["/node_modules/"],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    testEnvironment: "jsdom"
  };
  