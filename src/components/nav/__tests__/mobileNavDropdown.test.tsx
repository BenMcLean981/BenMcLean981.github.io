import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router";
import { MobileNavDropdown } from "../mobileNavDropdown";

describe("MobileNavDropdown.", () => {
  it("Renders all the links from home.", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MobileNavDropdown />
      </MemoryRouter>
    );

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(2);
    expect(items[0]).not.toHaveClass("active");
    expect(items[1]).not.toHaveClass("active");

    const links = screen.getAllByRole("link");

    expect(links.length).toBe(2);
    expect(links[0]).toHaveTextContent("Resume");
    expect(links[1]).toHaveTextContent("Minesweeper");
  });

  it("Renders all the links from resume.", () => {
    render(
      <MemoryRouter initialEntries={["/resume"]}>
        <MobileNavDropdown />
      </MemoryRouter>
    );

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(2);
    expect(items[0]).toHaveClass("active");
    expect(items[1]).not.toHaveClass("active");

    const links = screen.getAllByRole("link");

    expect(links.length).toBe(2);
    expect(links[0]).toHaveTextContent("Resume");
    expect(links[1]).toHaveTextContent("Minesweeper");
  });

  it("Renders all the links from minesweeper.", () => {
    render(
      <MemoryRouter initialEntries={["/minesweeper"]}>
        <MobileNavDropdown />
      </MemoryRouter>
    );

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(2);
    expect(items[0]).not.toHaveClass("active");
    expect(items[1]).toHaveClass("active");

    const links = screen.getAllByRole("link");

    expect(links.length).toBe(2);
    expect(links[0]).toHaveTextContent("Resume");
    expect(links[1]).toHaveTextContent("Minesweeper");
  });
});
