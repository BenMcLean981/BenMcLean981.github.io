import { fireEvent, renderHook } from "@testing-library/react";
import { useMediaQuery } from "../useMediaQuery";

let resized = false;

function fakeResize() {
  resized = true;
  fireEvent.resize(window);
}

beforeEach(() => {
  resized = false;

  function mediaHelper(query: string) {
    if (resized && query === "afterResize") {
      return true;
    } else if (query === "bar") {
      return true;
    } else {
      return false;
    }
  }

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: mediaHelper(query),
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

describe("useMediaQuery", () => {
  it("returns false for no matches.", () => {
    const { result } = renderHook(() => useMediaQuery("foo"));

    expect(result.current).toBe(false);
  });

  it("returns true for match.", () => {
    const { result } = renderHook(() => useMediaQuery("bar"));

    expect(result.current).toBe(true);
  });

  it("updates after resize", () => {
    const { result } = renderHook(() => useMediaQuery("afterResize"));

    expect(result.current).toBe(false);

    fakeResize();

    expect(result.current).toBe(true);
  });
});
