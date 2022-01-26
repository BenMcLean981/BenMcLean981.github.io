import { DesktopNavLink } from "./desktopNavLink";
import { NavRoute } from "../navRoute";

interface Props {
  homeRoute: NavRoute;
  routes: NavRoute[];
}

export function DesktopNav(props: Props) {
  return (
    <div className="hidden md:flex justify-center align-middle space-x-7 items-center gap-2">
      <DesktopNavLink route={props.homeRoute}>
        <img src="favicon.ico" alt="Logo" className="h-8 w-8 mr-2" />
      </DesktopNavLink>

      {props.routes.map((route) => (
        <DesktopNavLink key={route.path} route={route} />
      ))}
    </div>
  );
}
