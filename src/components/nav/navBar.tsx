import { useRef, useState } from "react";

import { DarkModeSwitch } from "./darkModeSwitch";
import { DesktopNav } from "./desktop/DesktopNav";
import { MobileDropdownButton } from "./mobile/mobileDropdownButton";
import { MobileNavDropdown } from "./mobile/mobileNavDropdown";
import { NavRoute } from "./navRoute";
import { useOutsideAlterter } from "../../hooks/useOutsideAlerter";

/**
 * Source:
 * https://www.section.io/engineering-education/creating-a-responsive-navigation-bar-using-tailwind-css-and-javascript/
 *
 * I was learning tailwind while making this site so I referenced a blog
 *
 * @returns
 */

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  function forceClose() {
    setMobileOpen(false);
  }

  useOutsideAlterter(navRef, forceClose);

  const homeRoute: NavRoute = { name: "Home", path: "/" };

  const routes: NavRoute[] = [
    { name: "Minesweeper", path: "/minesweeper" },
    { name: "Fluid Simulation", path: "/fluid-simulation" },
  ];

  return (
    <div>
      <nav className="bg-gray-800 shadow-lg" ref={navRef}>
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center">
            <DesktopNav routes={routes} homeRoute={homeRoute} />
            <div className="flex justify-end items-center gap-x-2">
              <DarkModeSwitch />
              <MobileDropdownButton
                handleToggle={() => setMobileOpen((open) => !open)}
                open={mobileOpen}
              />
            </div>
          </div>
        </div>
        {mobileOpen && (
          <div className="mobile-menu md:hidden" ref={menuRef}>
            <MobileNavDropdown routes={routes} />
          </div>
        )}
      </nav>
    </div>
  );
}
