import { useEffect, useRef, useState } from "react";

import { DarkModeSwitch } from "./darkModeSwitch";
import { DesktopNav } from "./DesktopNav";
import { MobileDropdownButton } from "./mobileDropdownButton";
import { MobileNavDropdown } from "./mobileNavDropdown";
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

  // useEffect(() => {
  //   if (mobileOpen) menuRef.current?.classList.add("hidden");
  //   else menuRef.current?.classList.remove("hidden");
  // }, [mobileOpen]);

  function forceClose() {
    setMobileOpen(false);
  }

  useOutsideAlterter(navRef, forceClose);

  return (
    <div>
      <nav className="bg-gray-800 shadow-lg" ref={navRef}>
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center">
            <DesktopNav />
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
            <MobileNavDropdown />
          </div>
        )}
      </nav>
    </div>
  );
}
