import { MinesweeperTileButton, makeTile } from "./tile";
import { render, screen } from "@testing-library/react";

import React from "react";

describe("makeTile", () => {
  it("Makes a tile from the given row and column", () => {
    expect(makeTile(2, 3)).toEqual({
      flagged: false,
      hidden: true,
      mined: false,
      position: { row: 2, col: 3 },
    });
  });
});

describe("TileComponent", () => {
  it("renders a div", () => {
    render(<MinesweeperTileButton tile={makeTile(2, 3)} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
