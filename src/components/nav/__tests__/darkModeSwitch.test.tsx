import React, { ReactElement } from "react";
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
  it("renders both buttons.", () => {
    const wrapper = ({ children }: { children: ReactElement }) => (
      <DarkModeProvider>{children}</DarkModeProvider>
    );

    render(<DarkModeSwitch />, { wrapper });

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(2);
  });

  it("Renders correct icon.", () => {
    const wrapper = ({ children }: { children: ReactElement }) => (
      <DarkModeProvider>{children}</DarkModeProvider>
    );

    render(<DarkModeSwitch />, { wrapper });

    expect(screen.getByText("🌙")).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    buttons[0].click();

    expect(screen.getByText("☀️")).toBeInTheDocument();

    buttons[1].click();
    expect(screen.getByText("🌙")).toBeInTheDocument();
  });
});
