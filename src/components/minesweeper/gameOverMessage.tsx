import React from "react";

interface Props {
  gameOver: boolean;
  hasLost: boolean;
}

export function GameOverMessage(props: Props) {
  if (!props.gameOver) return <React.Fragment />;
  else if (props.hasLost) return <h1>You Lose!</h1>;
  else return <h1>You Win!</h1>;
}
