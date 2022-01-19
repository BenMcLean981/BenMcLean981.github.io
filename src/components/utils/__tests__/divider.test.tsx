import { render, screen } from "@testing-library/react";

import { Divider } from "../divider";

describe("divider", () => {
  it("Renders the correct classes.", () => {
    render(<Divider />);

    expect(screen.getByRole("separator")).toHaveClass("my-4");
  });
});
