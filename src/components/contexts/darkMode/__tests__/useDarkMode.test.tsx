import * as React from "react";

import { DarkModeProvider } from "../darkModeProvider";
import { renderHook } from "@testing-library/react";
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
  const wrapper = ({ children }: { children: React.ReactElement }) => (
    <DarkModeProvider>{children}</DarkModeProvider>
  );

  it("Throws an error for missing context.", () => {
    expect(() => renderHook(() => useDarkMode())).toThrowError(
      "useDarkMode must be used within a DarkModeProvider"
    );
  });

  it("Does not throw an error when darmKode is present.", () => {
    expect(() => {
      renderHook(() => useDarkMode(), { wrapper });
    }).not.toThrowError();
  });

  it("Can change the dark-mode setting.", () => {
    const { result } = renderHook(() => useDarkMode(), { wrapper });

    const [state, dispatch] = result.current;

    expect(state).toBe(false);

    dispatch({ type: "ENABLE" });
    expect(state).toBe(true);
    dispatch({ type: "ENABLE" });
    expect(state).toBe(true);

    dispatch({ type: "DISABLE" });
    expect(state).toBe(false);
    dispatch({ type: "DISABLE" });
    expect(state).toBe(false);

    dispatch({ type: "TOGGLE" });
    expect(state).toBe(true);
    dispatch({ type: "TOGGLE" });
    expect(state).toBe(false);
  });
});
