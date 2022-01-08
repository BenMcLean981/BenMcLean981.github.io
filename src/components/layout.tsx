import { PropsWithChildren } from "react";
import { NavBar } from "./nav/navBar";

export function Layout(props: PropsWithChildren<{}>) {
    return <div>
        <NavBar />
        <div className="container">
            {props.children}
        </div>
    </div>;
}