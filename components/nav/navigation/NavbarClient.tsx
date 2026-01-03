"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { GroupedMenu, NavbarProducts } from "@/type/dataTypes";

interface NavProps {
  menu: GroupedMenu;
}

export default function NavbarClient( {menu} : NavProps) {
  const isMobile = useIsMobile(1024);

  return <>{isMobile ? <MobileNavigation menu={menu} /> : <DesktopNavigation menu={menu}/>}</>;
}
