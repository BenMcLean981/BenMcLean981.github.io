import React from "react";

interface Props {
  gameOver: boolean;
  hasLost: boolean;
}

export function GameOverMessage(props: Props) {
  const textClass = "text-4xl font-medium leading-tight";

  if (!props.gameOver) return <React.Fragment />;
  else if (props.hasLost) return <h1 className={textClass}>You Lose!</h1>;
  else return <h1 className={textClass}>You Win!</h1>;
}
