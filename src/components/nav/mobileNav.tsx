import { Link } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router";

export function MobileNav() {
  const location = useLocation();

  return (
    <ul className="bg-gray-700">
      <li className={location.pathname === "/resume" ? "active" : undefined}>
        <Link
          to="resume"
          className="block text-sm px-6 py-4 text-white hover:bg-blue-500 transition duration-300 font-semibold"
        >
          Resume
        </Link>
      </li>
      <li
        className={location.pathname === "/minesweeper" ? "active" : undefined}
      >
        <Link
          to="minesweeper"
          className="block text-sm px-6 py-4 text-white hover:bg-blue-500 transition duration-300 font-semibold"
        >
          Minesweeper
        </Link>
      </li>
    </ul>
  );
}
