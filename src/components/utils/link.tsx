import React from "react";

export function A(props: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a className="underline text-blue-500" {...props}>
      {props.children}
    </a>
  );
}
