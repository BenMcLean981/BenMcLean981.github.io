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
  it("renders a hidden cell.", () => {
    const tile = makeTile(2, 3);

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("");
  });

  it("renders a mined shown cell.", () => {
    const tile = makeTile(2, 3);
    tile.hidden = false;
    tile.mined = true;

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("X");
  });

  it("renders a mined hidden cell.", () => {
    const tile = makeTile(2, 3);
    tile.hidden = true;
    tile.mined = true;

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("");
  });

  it("renders a flagged shown cell.", () => {
    const tile = makeTile(2, 3);
    tile.hidden = false;
    tile.flagged = true;

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("F");
  })

  it("renders a flagged hidden cell.", () => {
    const tile = makeTile(2, 3);
    tile.hidden = true;
    tile.flagged = true;

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("");
  })

  it("renders a shown numbered cell.", () => {
    const tile = makeTile(2, 3);
    tile.hidden = false;
    tile.number = 1;

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("1");
  })

  it("renders a hidden numbered cell.", () => {
    const tile = makeTile(2, 3);
    tile.hidden = true;
    tile.number = 1;

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("");
  })
});
