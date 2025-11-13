"use client";

import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

/**
 * Convert a string icon name from JSON to actual React Lucide icon component.
 * @param iconName string name of the icon in JSON
 * @param fallback optional fallback icon if the name is invalid
 * @returns React component for the icon
 */
export function getReactIcon(
  iconName: string,
  fallback: LucideIcon = Icons.Circle
): LucideIcon {
  // Dynamic lookup in the Icons object
  return (Icons as unknown as Record<string, LucideIcon>)[iconName] || fallback;
}
