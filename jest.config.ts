import type { Config } from "jest";

const config: Config = {
  verbose: true,
  collectCoverageFrom: [
    "src/components/**/*.{js,jsx,ts,tsx}",
    "src/hooks/**/*.{js,jsx,ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  testEnvironmentOptions: {},
};

export default config;
