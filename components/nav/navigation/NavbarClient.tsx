"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { NavbarProducts } from "@/type/dataTypes";

interface NavProps {
  menu: NavbarProducts[];
}

export default function NavbarClient( {menu} : NavProps) {
  const isMobile = useIsMobile(1024);

  return <>{isMobile ? <MobileNavigation menu={menu} /> : <DesktopNavigation menu={menu}/>}</>;
}
