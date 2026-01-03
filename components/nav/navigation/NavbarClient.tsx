"use client";

import { useState, useEffect } from "react"; // Added
import { useIsMobile } from "@/hooks/use-mobile";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { GroupedMenu } from "@/lib/navbarMenu";

export default function NavbarClient({ menu }: { menu: GroupedMenu }) {
  const isMobile = useIsMobile(1024);
  const [mounted, setMounted] = useState(false);

  // This ensures the component only "activates" once it's safely in the browser
  useEffect(() => {
    setMounted(true);
  }, []);

  // While rendering on server, show a simple placeholder that won't crash
  if (!mounted) {
    return <div className="h-20 w-full bg-white border-b" />; 
  }

  return (
    <>
      {isMobile ? (
        <MobileNavigation menu={menu} />
      ) : (
        <DesktopNavigation menu={menu} />
      )}
    </>
  );
}