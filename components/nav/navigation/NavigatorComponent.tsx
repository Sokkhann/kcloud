"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function NavigatorComponent() {
  const isMobile = useIsMobile(1024);

  return <>{isMobile ? <MobileNavigation /> : <DesktopNavigation />}</>;
}
