module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/setupTests.ts",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "@sentrei/common/(.*)": "<rootDir>/../common/src/$1",
    "@sentrei/video/(.*)": "<rootDir>/src/$1",
  },
  setupFiles: ["<rootDir>/src/setupTests.ts"],
  collectCoverage: true,
  verbose: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/*.spec.{ts,tsx}",
    "!**/*.stories.tsx",
    "!**/node_modules/**",
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
};
