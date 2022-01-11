import { render, screen } from "@testing-library/react";

import { DarkModeSwitch } from "../darkModeSwitch";

describe("darkModeSwitch.", () => {
  it("renders the button.", () => {
    render(<DarkModeSwitch />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
