import { NavBar } from "./nav/navBar";
import { PropsWithChildren } from "react";

export function Layout(props: PropsWithChildren<{}>) {
  return (
    <div>
      <NavBar />
      <div className="pb-24">{props.children}</div>
    </div>
  );
}
