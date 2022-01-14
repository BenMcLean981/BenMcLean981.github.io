import { NavBar } from "./nav/navBar";
import { PropsWithChildren } from "react";

export function Layout(props: PropsWithChildren<{}>) {
  return (
    <div>
      <NavBar />
      <div className="pb-24 container mx-auto pt-2">{props.children}</div>
    </div>
  );
}
