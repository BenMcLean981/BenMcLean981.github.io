import { fireEvent, render, screen } from "@testing-library/react";

import { MinesweeperTile } from "./tile";
import { MinesweeperTileButton } from "./minesweeperTileButton";
import { Position } from "./position";

describe("TileComponent", () => {
  it("renders a hidden cell.", () => {
    const tile = MinesweeperTile.makeTile(new Position(2, 3));

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("");
  });

  it("renders a mined shown cell.", () => {
    const tile = MinesweeperTile.makeTile(new Position(2, 3)).mine().reveal();

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("💣");
  });

  it("renders a mined hidden cell.", () => {
    const tile = MinesweeperTile.makeTile(new Position(2, 3)).mine();

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("");
  });

  it("renders a flagged shown cell.", () => {
    const tile = MinesweeperTile.makeTile(new Position(2, 3))
      .toggleFlag()
      .reveal();

    expect(tile.flags.flagged).toBe(true);

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("🚩");
  });

  it("renders a flagged hidden cell.", () => {
    const tile = MinesweeperTile.makeTile(new Position(2, 3)).toggleFlag();

    expect(tile.flags.flagged).toBe(true);

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("🚩");
  });

  it("renders a shown numbered cell.", () => {
    const tile = MinesweeperTile.makeTile(new Position(2, 3))
      .applyNumber(1)
      .reveal();

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("1");
  });

  it("renders a hidden numbered cell.", () => {
    const tile = MinesweeperTile.makeTile(new Position(2, 3)).applyNumber(1);

    render(<MinesweeperTileButton tile={tile} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("");
  });

  it("calls handleFlag.", () => {
    const tile = MinesweeperTile.makeTile(new Position(2, 3)).applyNumber(1);

    const handleFlag = jest.fn();
    render(<MinesweeperTileButton tile={tile} handleFlag={handleFlag} />);

    const button = screen.getByRole("button");
    expect(handleFlag).toBeCalledTimes(0);

    fireEvent.contextMenu(button);

    expect(handleFlag).toBeCalledTimes(1);
  });

  it("calls handleReveal.", () => {
    const tile = MinesweeperTile.makeTile(new Position(2, 3)).applyNumber(1);

    const handleReveal = jest.fn();
    render(<MinesweeperTileButton tile={tile} handleReveal={handleReveal} />);

    const button = screen.getByRole("button");
    expect(handleReveal).toBeCalledTimes(0);

    button.click();

    expect(handleReveal).toBeCalledTimes(1);
  });
});
