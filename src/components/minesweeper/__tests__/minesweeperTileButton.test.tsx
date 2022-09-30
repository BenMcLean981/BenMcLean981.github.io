import { fireEvent, render, screen } from "@testing-library/react";

import { MinesweeperTile } from "../tile";
import { MinesweeperTileButton } from "../minesweeperTileButton";
import { Position } from "../position";

describe("TileComponent", () => {
  it("calls handleFlag on right click.", () => {
    const tile = MinesweeperTile.makeTile(new Position(2, 3)).applyNumber(1);

    const handleFlag = jest.fn();
    render(<MinesweeperTileButton tile={tile} handleFlag={handleFlag} />);

    const button = screen.getByRole("button");
    expect(handleFlag).toBeCalledTimes(0);

    fireEvent.contextMenu(button);

    expect(handleFlag).toBeCalledTimes(1);
  });

  it("calls handleReveal on left click.", () => {
    const tile = MinesweeperTile.makeTile(new Position(2, 3)).applyNumber(1);

    const handleReveal = jest.fn();
    render(<MinesweeperTileButton tile={tile} handleReveal={handleReveal} />);

    const button = screen.getByRole("button");
    expect(handleReveal).toBeCalledTimes(0);

    button.click();

    expect(handleReveal).toBeCalledTimes(1);
  });

  describe("getText.", () => {
    it("returns an empty string for an hidden tile.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: true, flagged: false, mined: false, clicked: false },
        0
      );

      render(<MinesweeperTileButton tile={tile} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("");
    });

    it("returns a flag string for an hidden flagged tile.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: true, flagged: true, mined: false, clicked: false },
        0
      );

      render(<MinesweeperTileButton tile={tile} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("🚩");
    });

    it("returns a number for flagged shown tile.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: true, mined: false, clicked: false },
        0
      );

      render(<MinesweeperTileButton tile={tile} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("");
    });

    it("returns blank for a mined hidden tile.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: true, flagged: false, mined: true, clicked: false },
        0
      );

      render(<MinesweeperTileButton tile={tile} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("");
    });

    it("returns a mine for a mined revealed tile.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: false, mined: true, clicked: false },
        0
      );

      render(<MinesweeperTileButton tile={tile} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("💣");
    });

    it("returns a bomb for a gameover flagged mine.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: true, mined: true, clicked: false },
        0
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("💣");
    });

    it("returns a cross for a gameover flagged non-mine.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: true, mined: false, clicked: false },
        0
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("❌");
    });

    it("returns a string for undefined nAdj.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: false, mined: false, clicked: false },
        undefined
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("");
    });

    it("returns an empty string for nAdj=0 and revealed.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: false, mined: false, clicked: false },
        0
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("");
    });

    it("returns a number string for nAdj!=0 and revealed.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: false, mined: false, clicked: false },
        3
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("3");
    });
  });

  describe("getTextColorClass.", () => {
    it("Returns text-blue-600 for 1.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: false, mined: false, clicked: false },
        1
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("text-blue-700");
      expect(button).toHaveClass("dark:text-blue-600");
    });

    it("Returns text-green-500 for 2.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: false, mined: false, clicked: false },
        2
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("text-green-500");
    });

    it("Returns text-red-700 for 3.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: false, mined: false, clicked: false },
        3
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("text-red-700");
    });

    it("Returns text-blue-900 for 4.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: false, mined: false, clicked: false },
        4
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("text-blue-900");
    });

    it("Returns text-red-900 for .", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: false, mined: false, clicked: false },
        5
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("text-red-900");
    });

    it("Returns text-cyan-700 for 6.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: false, mined: false, clicked: false },
        6
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("text-cyan-700");
    });

    it("Returns text-black for 7.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: false, mined: false, clicked: false },
        7
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("text-black");
    });

    it("Returns text-gray-700 for 8.", () => {
      const tile = new MinesweeperTile(
        new Position(1, 1),
        { hidden: false, flagged: false, mined: false, clicked: false },
        8
      );

      render(<MinesweeperTileButton tile={tile} gameOver={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("text-gray-700");
    });
  });
});
