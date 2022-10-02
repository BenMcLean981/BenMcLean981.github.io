import { MobileNavLink } from "./mobileNavLink";
import { NavRoute } from "../navRoute";

interface Props {
  routes: NavRoute[];
}

export function MobileNavDropdown(props: Props) {
  return (
    <ul className="bg-gray-700">
      {props.routes.map((route) => (
        <MobileNavLink route={route} key={route.name} />
      ))}
    </ul>
  );
}
