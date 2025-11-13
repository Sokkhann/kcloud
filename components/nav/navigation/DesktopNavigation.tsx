"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import OverviewMenuDropdown from "../OverviewMenuDropdown";
import ProductDropDown from "../ProductMenuDropdown";
import TopNavBar from "../Topper";

export default function DesktopNavigation() {
  return (
    <div className="fixed top-0 z-50 bg-white shadow-lg border-gray-300 w-full ">
      <div className="w-full">
        <TopNavBar />
      </div>
      <NavigationMenu className="px-4">
        <section className="w-full flex justify-between max-w-7xl mx-auto ">
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
              <NavigationMenuItem className="hidden lg:!block ">
                <NavigationMenuTrigger>Overview</NavigationMenuTrigger>

                {/* overview content dropdown */}
                <NavigationMenuContent asChild className="!w-screen !max-w-none !absolute p-0">
                  <div className="px-8 py-10">
                    <OverviewMenuDropdown />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* product dropdown tab */}
              <NavigationMenuItem className="hidden lg:!block ">
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>

                {/* overview content dropdown */}
                <NavigationMenuContent className="!w-screen !max-w-none !absolute p-0">
                  <div className="px-8 py-10">
                    <ProductDropDown />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* solution dropdown tab */}
              {/* <NavigationMenuItem className="hidden lg:!block ">
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>

                <NavigationMenuContent className="!w-screen !max-w-none left-0 !absolute p-0">
                  <NavigationMenuLink asChild>
                    <div className="px-8 py-10">
                      <SolutionDropDown />
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              {/* pricing tab */}
              <NavigationMenuItem className="group lg:inline-flex h-9 w-max items-center justify-center bg-background px-4 py-2 text-gray-700 text-base tracking-wide rounded-full hover:bg-gcxprimary/10 font-semibold hidden">
                <Link href="/pricing">Pricing</Link>
              </NavigationMenuItem>
            </section>
          </NavigationMenuList>

          {/* right sectoin */}
          <NavigationMenuList></NavigationMenuList>
          <NavigationMenuList className="mt-5">
            <button className="bg-white text-gcxprimary font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:bg-gcxprimary/10">
              Log in
            </button>

            <button className="text-white bg-gcxprimary font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:bg-gcxdarkgreen">
              Sign up
            </button>
          </NavigationMenuList>
        </section>
      </NavigationMenu>
    </div>
  );
}
