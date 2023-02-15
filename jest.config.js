/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/client/test/setupTests.ts"],
  moduleNameMapper: {
    "@test/(.*)": "<rootDir>/client/test/$1",
    "@src/(.*)": "<rootDir>/client/src/$1",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": "<rootDir>/client/test/svgTransform.js",
  },
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$|axios)/"],
};
