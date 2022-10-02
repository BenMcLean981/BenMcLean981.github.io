import { render, screen } from "@testing-library/react";

import { App } from "./App";
import React from "react";

let consoleErrorMock: jest.SpyInstance;

beforeEach(() => {
  consoleErrorMock = jest.spyOn(console, "error").mockImplementation();
});

afterEach(() => {
  consoleErrorMock.mockRestore();
});

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test("renders learn react link", () => {
  render(<App />);
  const navElement = screen.getByRole(/nav/i);
  expect(navElement).toBeInTheDocument();
});
