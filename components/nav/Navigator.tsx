"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import OverviewMenuDropdown from "./OverviewMenuDropdown";
import ProductDropDown from "./ProductMenuDropdown";
import SolutionDropDown from "./SolutionMenuDropdown";
import TopNavBar from "./Topper";

interface MenuItem {
  label: string;
  Content: React.FC;
}

const menuItems: MenuItem[] = [
  { label: "Overview", Content: OverviewMenuDropdown },
  { label: "Products", Content: ProductDropDown },
  { label: "Solutions", Content: SolutionDropDown },
];

export default function Navigator() {
  // Track open state for each dropdown
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-300">
        <div className="w-full">
          <TopNavBar />

          <div className="flex justify-between items-center max-w-7xl mx-auto">
            {/* Left section */}
            <div className="flex h-20">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/gcx-logo.png"
                  alt="neo logo"
                  width={80}
                  height={80}
                />
              </Link>

              {/* Dropdown menus */}
              <div className="flex gap-6 py-6 px-6">
                {menuItems.map(({ label, Content }, index) => (
                  <DropdownMenu
                    key={label}
                    open={openIndex === index}
                    onOpenChange={(isOpen) =>
                      setOpenIndex(isOpen ? index : null)
                    }
                  >
                    <DropdownMenuTrigger
                      onMouseEnter={() => setOpenIndex(index)}
                      onMouseLeave={() => setOpenIndex(null)}
                      className="px-2 py-1 hover:bg-green-950/10 border-none rounded-full font-medium text-[16px] transition-all duration-300"
                    >
                      {label}
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      onMouseEnter={() => setOpenIndex(index)} // keep open when hovering content
                      onMouseLeave={() => setOpenIndex(null)}
                      className="mt-5 transition-all duration-500 shadow-lg rounded-none border-0 w-screen"
                    >
                      <Content />
                    </DropdownMenuContent>
                  </DropdownMenu>
                ))}
              </div>

              {/* Pricing link */}
              <div className="flex items-center">
                <Link href="/pricing">
                  <p className="px-2 py-1 hover:bg-green-950/10 border-none rounded-full font-medium text-[16px] transition-all duration-300">
                    Pricing
                  </p>
                </Link>
              </div>
            </div>

            {/* Right section */}
            <div className="flex gap-4">
              <button className="bg-white text-green-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.5)] border border-green-700 hover:border-none">
                Log in
              </button>

              <button className="text-white bg-green-900 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.5)]">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
