"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, Facebook, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProductDropDown from "../ProductMenuDropdown";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import TopNavBar from "../Topper";
import { GroupedMenu } from "@/type/dataTypes";

interface MobileNavigationProps {
  menu: GroupedMenu;
}

export default function MobileNavigation({ menu }: MobileNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="fixed top-0 z-50 bg-white shadow-lg border-gray-300 w-full lg:hidden">
      <TopNavBar />

      <nav className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image src="/KCloud.png" alt="gcx kcloud logo" width={120} height={120} />
        </Link>

        <div className="flex">
          {/* Buttons */}
          <div className="md:flex hidden mr-4 gap-2 border-gray-200 items-center">
            <button className="w-auto bg-white text-gray-700 font-semibold px-6 py-2 rounded-full hover:bg-green-800/10 transition-all ">
              <Link href={""}>Log in</Link>
            </button>
            <button className="w-auto text-white bg-green-700 font-semibold px-6 py-2 rounded-full hover:bg-green-900 transition-all">
              <Link href={""}>Sign up</Link>
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-700 hover:bg-green-800/10 rounded-md"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              {menuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="border-t border-gray-200 bg-white shadow-md max-h-[calc(100vh-64px)] overflow-y-auto"
                >
                  <div className="flex flex-col p-4 space-y-2">

                    {/* Dropdown Sections we can add overview or solution and other */}

                    {["Products"].map((label) => (
                      <div key={label}>
                        <button
                          onClick={() => toggleSection(label)}
                          className="flex justify-between items-center w-full text-gray-700 font-semibold py-2 hover:text-green-700"
                        >
                          {label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${openSection === label
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
                              className="overflow-hidden pt-2 text-sm text-gray-600"
                            >
                              {/* {label === "Overview" && (
                                <div
                                  onClick={() => setMenuOpen(false)}
                                  className="mb-4"
                                >
                                  <OverviewMenuDropdown />
                                </div>
                              )} */}
                              {label === "Products" && (
                                <div
                                  onClick={() => setMenuOpen(false)}
                                  className="mb-4"
                                >
                                  <ProductDropDown products={menu} />
                                </div>
                              )}
                              {/* {label === "Solutions" && (
                                <div
                                  onClick={() => setMenuOpen(false)}
                                  className="mb-4"
                                >
                                  <SolutionDropDown />
                                </div>
                              )} */}
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
                    {/* Pricing link */}
                    <Link
                      href="/about-us"
                      className="text-gray-700 font-semibold hover:text-green-700 py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      Abous Us
                    </Link>
                    {/* Pricing link */}
                    <Link
                      href="/contact-us"
                      className="text-gray-700 font-semibold hover:text-green-700 py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      Contact Us
                    </Link>

                    {/* Buttons */}
                    <div className="flex gap-2 pt-4 border-gray-200 items-center justify-center md:hidden">
                      <button className="w-full bg-white text-gray-700 font-semibold px-6 py-2 rounded-full hover:bg-green-800/10 transition-all border-[1.5px] border-gray-700">
                        <Link href={""}>Log in</Link>
                      </button>
                      <button className="w-full text-white bg-green-700 font-semibold px-6 py-2 rounded-full hover:bg-green-900 transition-all">
                        <Link href={""}>Sign up</Link>
                      </button>
                    </div>

                    {/* contact us and about us */}
                    {/* <div className="flex gap-2 flex-col pt-4 border-gray-200 items-center justify-center md:hidden">
                      <div className="flex flex-row items-center justify-center sm:justify-end space-x-6 text-gcxPrimary">
                        <Link
                          href="https://facebook.com/yourpage"
                          target="_blank"
                          className="cursor-pointer"
                          aria-label="Facebook"
                        >
                          <Facebook size={20} strokeWidth={1.5} />
                        </Link>

                        <Link
                          href="https://linkedin.com/company/yourcompany"
                          target="_blank"
                          className="cursor-pointer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={20} strokeWidth={1.5} />
                        </Link>

                        <Link
                          href="https://t.me/yourusername"
                          target="_blank"
                          className="cursor-pointer"
                          aria-label="Telegram"
                        >
                          <Send size={20} strokeWidth={1.5} />
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </motion.div>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </AnimatePresence>
    </div>
  );
}
