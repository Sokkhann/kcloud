"use client"

import { useEffect, useState } from "react"

/**
 * Detects if the viewport width is below a given breakpoint (mobile).
 * @param breakpoint default = 768px
 */
export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < breakpoint)
    checkScreen()

    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [breakpoint])

  return isMobile
}
