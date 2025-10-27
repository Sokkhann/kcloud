"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import OverviewMenuDropdown from "./OverviewMenuDropdown";
import ProductDropDown from "./ProductMenuDropdown";
import SolutionDropDown from "./SolutionMenuDropdown";

export function Navigator() {
  return (
    <NavigationMenu className="fixed top-0 z-50 bg-white shadow-lg border-gray-300">
      <section className="w-full flex justify-between max-w-7xl mx-auto">
        {/* left section */}
        <NavigationMenuList>
          {/* logo section */}
          <NavigationMenuItem className="">
            <Link href="/">
              <Image
                src="/gcx-logo.png"
                alt="neo logo"
                width={80}
                height={80}
              />
            </Link>
          </NavigationMenuItem>

          <section className="mx-4 flex">
            {/* overview dropdown tab */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Overview</NavigationMenuTrigger>

              {/* overview content dropdown */}
              <NavigationMenuContent className="!w-screen !max-w-none !absolute p-0">
                <div className="px-8 py-10">
                  <OverviewMenuDropdown />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* products dropdown tab */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>

              {/* product content dropdown */}
              <NavigationMenuContent className="!w-screen !max-w-none left-0 !absolute p-0">
                <div className="px-8 py-10">
                  <ProductDropDown />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* solution dropdown tab */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>

              {/* solution dropdown content */}
              <NavigationMenuContent className="!w-screen !max-w-none left-0 !absolute p-0">
                <div className="px-8 py-10">
                  <SolutionDropDown />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </section>
        </NavigationMenuList>

        {/* right sectoin */}
        <NavigationMenuList>
         
        </NavigationMenuList>
        <NavigationMenuList className="mt-5">
          <button className="bg-white text-green-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:bg-green-800/10">
            Log in
          </button>

          <button className="text-white bg-green-700 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:bg-green-900">
            Sign up
          </button>
        </NavigationMenuList>
      </section>
    </NavigationMenu>
  );
}
