import { Link } from "react-router-dom";
import { NavRoute } from "../navRoute";
import React from "react";

interface Props {
  route: NavRoute;
}

export function DesktopNavLink(props: React.PropsWithChildren<Props>) {
  return (
    <div>
      <Link
        to={props.route.path}
        className="flex justify-center align-middle items-center "
      >
        {props.children}
        <span className="font-semibold text-gray-500 text-lg hover:text-blue-500 transition duration-300">
          {props.route.name}
        </span>
      </Link>
    </div>
  );
}
