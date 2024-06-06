import { NavBar } from "./nav/navBar";
import { PropsWithChildren } from "react";

export function Layout(props: PropsWithChildren<{}>) {
  return (
    <div>
      <NavBar />
      <div className="my-2 xl:mx-96 lg:mx-48 md:mx-12 sm:mx-6 mx-4">
        {props.children}
      </div>
    </div>
  );
}
