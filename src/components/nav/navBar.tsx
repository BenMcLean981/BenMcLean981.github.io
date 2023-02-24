import { useRef, useState } from "react";

import { ContactCard } from "../contactModal/contactModal";
import { DarkModeSwitch } from "./darkModeSwitch";
import { DesktopNav } from "./desktop/DesktopNav";
import { MobileDropdownButton } from "./mobile/mobileDropdownButton";
import { MobileNavDropdown } from "./mobile/mobileNavDropdown";
import { NavRoute } from "./navRoute";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";

/**
 * Source:
 * https://www.section.io/engineering-education/creating-a-responsive-navigation-bar-using-tailwind-css-and-javascript/
 *
 * I was learning tailwind while making this site so I referenced a blog
 */

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  function forceClose() {
    setMobileOpen(false);
  }

  useOutsideAlerter(navRef, forceClose);

  const homeRoute: NavRoute = { name: "Home", path: "/" };

  const routes: NavRoute[] = [
    { name: "Minesweeper", path: "/minesweeper" },
    { name: "Advent of Code", path: "/advent-of-code" },
  ];

  return (
    <div>
      <nav className="bg-gray-800 shadow-lg" ref={navRef}>
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <DesktopNav routes={routes} homeRoute={homeRoute} />
            </div>
            <div className="flex justify-end w-full md:w-auto items-center gap-x-6 my-6">
              <ContactCard>
                <span className="font-semibold text-gray-500 text-lg hover:text-blue-500 transition duration-300">
                  Contact
                </span>
              </ContactCard>
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
