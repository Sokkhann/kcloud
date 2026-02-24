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
      <MobileNavigation menu={menu} />
      <DesktopNavigation menu={menu} />
    </div>
  );
}
