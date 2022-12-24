import { render, screen, act } from "@testing-library/react";

import { DarkModeProvider } from "../darkModeProvider";
import { useDarkMode } from "../useDarkMode";

function UseDarkModeExample() {
  const { enabled, toggle, enable, disable } = useDarkMode();

  return (
    <div>
      <div>Dark: {enabled ? "true" : "false"}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={enable}>Enable</button>
      <button onClick={disable}>Disable</button>
    </div>
  );
}

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
      matches: false, // default to false.
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
    expect(() => render(<UseDarkModeExample />)).toThrowError(
      "useDarkMode must be used within a DarkModeProvider"
    );
  });

  it("Does not throw an error when context is present.", () => {
    expect(() =>
      render(
        <DarkModeProvider>
          <UseDarkModeExample />
        </DarkModeProvider>
      )
    ).not.toThrowError();
  });

  it("Can change the dark-mode setting.", () => {
    render(
      <DarkModeProvider>
        <UseDarkModeExample />
      </DarkModeProvider>
    );

    const dark = screen.getByText(/dark/i);
    const toggle = screen.getByText(/toggle/i);
    const enable = screen.getByText(/enable/i);
    const disable = screen.getByText(/disable/i);

    expect(dark).toHaveTextContent("true");

    act(() => {
      disable.click();
    });

    expect(dark).toHaveTextContent("false");

    act(() => {
      disable.click();
    });

    expect(dark).toHaveTextContent("false");

    act(() => {
      enable.click();
    });

    expect(dark).toHaveTextContent("true");

    act(() => {
      enable.click();
    });

    expect(dark).toHaveTextContent("true");

    act(() => {
      toggle.click();
    });

    expect(dark).toHaveTextContent("false");

    act(() => {
      toggle.click();
    });

    expect(dark).toHaveTextContent("true");
  });
});
