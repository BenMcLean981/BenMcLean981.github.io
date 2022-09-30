import { render, screen } from "@testing-library/react";

import { MobileDropdownButton } from "../mobileDropdownButton";

describe("mobileDropdownButton.", () => {
  it("renders gray if closed.", () => {
    render(<MobileDropdownButton open={false} handleToggle={() => {}} />);

    expect(screen.getByRole("img")).toHaveClass("text-gray-500");
  });

  it("renders white if open.", () => {
    render(<MobileDropdownButton open={true} handleToggle={() => {}} />);

    expect(screen.getByRole("img")).toHaveClass("text-white");
  });

  it("calls the callback.", () => {
    const callback = jest.fn();

    render(<MobileDropdownButton open={false} handleToggle={callback} />);

    const button = screen.getByRole("button");

    expect(callback).toBeCalledTimes(0);

    button.click();

    expect(callback).toBeCalledTimes(1);
  });
});
