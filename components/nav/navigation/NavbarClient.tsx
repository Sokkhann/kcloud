"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { GroupedMenu, NavbarProducts } from "@/type/dataTypes";

interface NavProps {
  menu: GroupedMenu;
}

export default function NavbarClient({ menu }: NavProps) {
  return (
    <div className="fixed top-0 z-50 w-full shadow-lg">
      <div className="lg:hidden">
        <MobileNavigation menu={menu} />
      </div>
      <div className="hidden lg:block">
        <DesktopNavigation menu={menu} />
      </div>
    </div>
  );
}
