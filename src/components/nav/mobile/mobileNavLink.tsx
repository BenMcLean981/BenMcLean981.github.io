import { Link, useLocation } from "react-router-dom";

import { NavRoute } from "../navRoute";

interface Props {
  route: NavRoute;
}

export function MobileNavLink(props: Props) {
  const location = useLocation();

  return (
    <li
      className={location.pathname === props.route.path ? "active" : undefined}
    >
      <Link
        to={props.route.path}
        className="block text-sm px-6 py-4 text-white hover:bg-blue-500 transition duration-300 font-semibold"
      >
        {props.route.name}
      </Link>
    </li>
  );
}
