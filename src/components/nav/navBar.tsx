import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { Home } from "../../pages/home";
import { MobileNav } from "./mobileNav";
import { useOutsideAlterter } from "../../hooks/useOutsideAlerter";

/**
 * Source:
 * https://www.section.io/engineering-education/creating-a-responsive-navigation-bar-using-tailwind-css-and-javascript/
 *
 * Was learning tailwind while making this site
 *
 * @returns
 */

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen) menuRef.current?.classList.add("hidden");
    else menuRef.current?.classList.remove("hidden");
  }, [mobileOpen]);

  function forceOpen() {
    setMobileOpen(true);
  }

  function forceClose() {
    setMobileOpen(false);
  }

  useOutsideAlterter(navRef, forceClose);

  function handleToggle() {
    setMobileOpen((open) => !open);
  }

  return (
    <Router>
      <div>
        <nav className="bg-gray-800 shadow-lg" ref={navRef}>
          <div className="mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <Link to="/" className="flex items-center py-4 px-2">
                    <img
                      src="favicon.ico"
                      alt="Logo"
                      className="h-8 w-8 mr-2"
                    />
                    <span className="font-semibold text-gray-500 text-lg hover:text-blue-500 transition duration-300">
                      Ben McLean
                    </span>
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <Link
                    to="/resume"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                  >
                    Resume
                  </Link>
                  <Link
                    to="/minesweeper"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                  >
                    Minesweeper
                  </Link>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  className="outline-none mobile-menu-button"
                  onClick={handleToggle}
                >
                  <svg
                    className={`w-6 h-6 transition duration-300 ${
                      mobileOpen ? "text-white" : "text-gray-500"
                    }`}
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden hidden mobile-menu" ref={menuRef}>
            <MobileNav />
          </div>
        </nav>

        <Switch>
          <Route path="/resume">Resume</Route>
          <Route path="/minesweeper">Minesweeper</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
