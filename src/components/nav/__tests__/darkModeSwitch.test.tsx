import { render, screen } from "@testing-library/react";

import { DarkModeProvider } from "../../../components/contexts/darkMode/darkModeProvider";
import { DarkModeSwitch } from "../darkModeSwitch";

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

describe("darkModeSwitch.", () => {
  it("renders the button.", () => {
    const wrapper = ({ children }) => (
      <DarkModeProvider>{children}</DarkModeProvider>
    );

    render(<DarkModeSwitch />, { wrapper });

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
