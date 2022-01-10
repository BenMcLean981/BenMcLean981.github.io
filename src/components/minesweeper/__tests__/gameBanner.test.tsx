import { render, screen } from "@testing-library/react";

import { GameBanner } from "../gameBanner";
import { MinesweeperGrid } from "../grid";

jest.mock("../gameOverMessage", () => ({
  GameOverMessage: () => <div data-testid="gameOverMessage" />,
}));

describe("GameOverMessage", () => {
  it("renders the game over message", () => {
    const grid = MinesweeperGrid.make({ rows: 3, cols: 3, mines: 3 });

    render(<GameBanner grid={grid} onReset={() => {}} />);

    expect(screen.getByTestId("gameOverMessage")).not.toBeNull();
  });

  it("renders the reset button", () => {
    const grid = MinesweeperGrid.make({ rows: 3, cols: 3, mines: 3 });

    const onReset = jest.fn();
    render(<GameBanner grid={grid} onReset={onReset} />);
    expect(onReset).toBeCalledTimes(0);

    const button = screen.getByRole("button");
    expect(button).not.toBeNull();
    button.click();

    expect(onReset).toBeCalledTimes(1);
  });
});
