import React, { PropsWithChildren } from "react";

export interface AProps {
  href: string;
  newWindow?: boolean;
}

export function Anchor(props: PropsWithChildren<AProps>) {
  const { href, newWindow } = props;

  if (newWindow) {
    return (
      <a
        className="underline text-blue-500"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    );
  } else {
    return (
      <a className="underline text-blue-500" href={href}>
        {props.children}
      </a>
    );
  }
}
