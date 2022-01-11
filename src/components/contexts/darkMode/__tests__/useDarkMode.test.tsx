import * as React from "react";

import { DarkModeProvider } from "../darkModeProvider";
import { renderHook } from "@testing-library/react-hooks";
import { useDarkMode } from "../useDarkMode";

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

describe("useDarkMode.", () => {
  it("Throws an error for missing context.", () => {
    const { result } = renderHook(() => useDarkMode());

    expect(result.error.message).toBe(
      "useDarkMode must be used within a DarkModeProvider"
    );
  });

  it("Does not throw an error when darmKode is present.", () => {
    const wrapper = ({ children }: { children: React.ReactChild[] }) => (
      <DarkModeProvider>{children}</DarkModeProvider>
    );
    const { result } = renderHook(() => useDarkMode(), { wrapper });

    expect(result.error?.message).toBeUndefined();
  });
});
