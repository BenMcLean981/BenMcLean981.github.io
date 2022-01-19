import React from "react";

interface Props {
  tag: string;
}

/**
 * This is only meant to do small inline react code.
 */
export function ComponentText(props: React.PropsWithChildren<Props>) {
  const componentClass = "text-teal-500 inline capitalize text-medium";

  if (props.children === undefined)
    return <p className={componentClass}>{"<" + props.tag + " />"}</p>;
  else
    return (
      <div>
        <p className={componentClass}>{"<" + props.tag + ">"}</p>
        {props.children}
        <p className={componentClass}>{"</" + props.tag + ">"}</p>
      </div>
    );
}
