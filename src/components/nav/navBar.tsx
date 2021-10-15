import { useEffect, useRef, useState } from "react";

import { DesktopNav } from "./DesktopNav";
import { MobileDropdown } from "./mobileDropdown";
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

  function forceClose() {
    setMobileOpen(false);
  }

  useOutsideAlterter(navRef, forceClose);

  function handleToggle() {
    setMobileOpen((open) => !open);
  }

  return (
    <div>
      <nav className="bg-gray-800 shadow-lg" ref={navRef}>
        <div className="mx-auto px-4">
          <div className="flex justify-between">
            <DesktopNav />
            <MobileDropdown
              handleToggle={() => setMobileOpen((open) => !open)}
              open={mobileOpen}
            />
          </div>
        </div>
        <div className="md:hidden hidden mobile-menu" ref={menuRef}>
          <MobileNav />
        </div>
      </nav>
    </div>
  );
}
