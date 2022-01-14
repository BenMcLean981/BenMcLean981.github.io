import { H1, H2, H3, H4, H5, H6 } from "../headings";
import { render, screen } from "@testing-library/react";

describe("H1", () => {
  it("Has the requisite classes and renders children", () => {
    render(<H1>Foo</H1>);

    expect(screen.getByText("Foo")).toBeInTheDocument();

    expect(screen.getByText("Foo")).toHaveClass("text-6xl");
    expect(screen.getByText("Foo")).toHaveClass("font-medium");
    expect(screen.getByText("Foo")).toHaveClass("my-2");
    expect(screen.getByText("Foo")).toHaveClass("dark:text-white");
  });
});

describe("H2", () => {
  it("Has the requisite classes and renders children", () => {
    render(<H2>Foo</H2>);

    expect(screen.getByText("Foo")).toBeInTheDocument();

    expect(screen.getByText("Foo")).toHaveClass("text-4xl");
    expect(screen.getByText("Foo")).toHaveClass("font-medium");
    expect(screen.getByText("Foo")).toHaveClass("my-2");
    expect(screen.getByText("Foo")).toHaveClass("dark:text-white");
  });
});

describe("H3", () => {
  it("Has the requisite classes and renders children", () => {
    render(<H3>Foo</H3>);

    expect(screen.getByText("Foo")).toBeInTheDocument();

    expect(screen.getByText("Foo")).toHaveClass("text-2xl");
    expect(screen.getByText("Foo")).toHaveClass("font-medium");
    expect(screen.getByText("Foo")).toHaveClass("my-2");
    expect(screen.getByText("Foo")).toHaveClass("dark:text-white");
  });
});

describe("H4", () => {
  it("Has the requisite classes and renders children", () => {
    render(<H4>Foo</H4>);

    expect(screen.getByText("Foo")).toBeInTheDocument();

    expect(screen.getByText("Foo")).toHaveClass("text-lg");
    expect(screen.getByText("Foo")).toHaveClass("font-medium");
    expect(screen.getByText("Foo")).toHaveClass("my-2");
    expect(screen.getByText("Foo")).toHaveClass("dark:text-white");
  });
});

describe("H5", () => {
  it("Has the requisite classes and renders children", () => {
    render(<H5>Foo</H5>);

    expect(screen.getByText("Foo")).toBeInTheDocument();

    expect(screen.getByText("Foo")).toHaveClass("text-md");
    expect(screen.getByText("Foo")).toHaveClass("font-medium");
    expect(screen.getByText("Foo")).toHaveClass("my-2");
    expect(screen.getByText("Foo")).toHaveClass("dark:text-white");
  });
});

describe("H6", () => {
  it("Has the requisite classes and renders children", () => {
    render(<H6>Foo</H6>);

    expect(screen.getByText("Foo")).toBeInTheDocument();

    expect(screen.getByText("Foo")).toHaveClass("text-sm");
    expect(screen.getByText("Foo")).toHaveClass("font-medium");
    expect(screen.getByText("Foo")).toHaveClass("my-2");
    expect(screen.getByText("Foo")).toHaveClass("dark:text-white");
  });
});
