"use client";

import React from "react";

import Image from "next/image";
import { DropdownMenu } from "../ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import OverviewMenuDropdown from "./OverviewMenuDropdown";
import ProductDropDown from "./ProductMenuDropdown";
import SolutionDropDown from "./SolutionMenuDropdown";
import Link from "next/link";
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
  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-300">
        <div className="w-full">
          <TopNavBar />

          <div className="flex justify-between items-center">
            {/* left section */}
            <div className="flex h-20">
              {/* Image */}
              <Link href="/">
                <Image
                  src="/gcx-logo.png"
                  alt="neo logo"
                  width={80}
                  height={80}
                />
              </Link>

              {/* Dorpdown menu on navbar */}
              <div className="flex gap-6 py-6 px-12">
                {menuItems.map(({ label, Content }) => (
                  <DropdownMenu key={label}>
                    <DropdownMenuTrigger className="px-2 py-1 hover:bg-green-950/10 border-none rounded-full font-medium text-[16px]">
                      {label}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-6">
                      <Content />
                    </DropdownMenuContent>
                  </DropdownMenu>
                ))}
              </div>
            </div>

            {/* right section */}
            <div className="flex gap-4">
              {/* Log In button */}
              <button className="bg-white text-green-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.5)] border border-green-700 hover:border-none">
                Log in
              </button>

              {/* Sign Up button */}
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
