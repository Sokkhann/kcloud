"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import OverviewMenuDropdown from "../OverviewMenuDropdown";
import ProductDropDown from "../ProductMenuDropdown";
import SolutionDropDown from "../SolutionMenuDropdown";
import TopNavBar from "../Topper";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

export default function MobileNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="fixed top-0 z-50 bg-white shadow-lg border-gray-300 w-full md:hidden">
      <TopNavBar />

      <nav className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image src="/gcx-logo.png" alt="neo logo" width={80} height={80} />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-gray-700 hover:bg-green-800/10 rounded-md"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="border-t border-gray-200 bg-white shadow-md max-h-[calc(100vh-64px)] overflow-y-auto"
                >
                  <div className="flex flex-col p-4 space-y-2">
                    {/* Dropdown Sections */}
                    {["Overview", "Products", "Solutions"].map((label) => (
                      <div key={label}>
                        <button
                          onClick={() => toggleSection(label)}
                          className="flex justify-between items-center w-full text-gray-700 font-semibold py-2 hover:text-green-700"
                        >
                          {label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              openSection === label
                                ? "rotate-180 text-green-700"
                                : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {openSection === label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pl-3 pt-2 text-sm text-gray-600"
                            >
                              {label === "Overview" && <OverviewMenuDropdown />}
                              {label === "Products" && <ProductDropDown />}
                              {label === "Solutions" && <SolutionDropDown />}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}

                    {/* Pricing link */}
                    <Link
                      href="/pricing"
                      className="text-gray-700 font-semibold hover:text-green-700 py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      Pricing
                    </Link>

                    {/* Buttons */}
                    <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 items-center justify-center">
                      <button className="w-1/3 sm:w-auto bg-white text-green-800 font-semibold px-6 py-2 rounded-full hover:bg-green-800/10 transition-all">
                        Log in
                      </button>
                      <button className="w-1/3 sm:w-auto text-white bg-green-700 font-semibold px-6 py-2 rounded-full hover:bg-green-900 transition-all">
                        Sign up
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
