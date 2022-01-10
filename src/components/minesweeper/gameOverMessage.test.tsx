import { render, screen } from "@testing-library/react";

import { GameOverMessage } from "./gameOverMessage";

describe("GameOverMessage", () => {
  it("renders nothing if the game is not over.", () => {
    render(<GameOverMessage hasLost={false} gameOver={false} />);
    expect(screen.queryByText("You Win!")).toBeNull();
    expect(screen.queryByText("You Lose!")).toBeNull();
  });

  it("renders win message if game has been won.", () => {
    render(<GameOverMessage hasLost={false} gameOver={true} />);
    expect(screen.getByText("You Win!")).not.toBeNull();
    expect(screen.queryByText("You Lose!")).toBeNull();
  });

  it("renders lose message if game has been lost.", () => {
    render(<GameOverMessage hasLost={true} gameOver={true} />);
    expect(screen.queryByText("You Win!")).toBeNull();
    expect(screen.getByText("You Lose!")).not.toBeNull();
  });
});
