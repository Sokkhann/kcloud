"client side"
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import ProductDropDown from "../ProductMenuDropdown";
import { GroupedMenu } from "@/type/dataTypes";
import TopNavBar from "../Topper";

interface DesktopNavigationProps {
  menu: GroupedMenu;
}

export default function DesktopNavigation({menu}: DesktopNavigationProps) {
  return (
    <div className="fixed top-0 z-50 bg-white shadow-lg border-gray-300 w-full hidden lg:block">
      <div className="w-full">
        <TopNavBar />
      </div>
      <NavigationMenu className="px-4">
        <section className="w-full flex justify-between max-w-7xl mx-auto ">
          {/* left section */}
          <NavigationMenuList>
            {/* logo section */}
            <NavigationMenuItem className="">
              {/* <Link href="/">
                <Image
                  src="/KCloud.png"
                  alt="neo logo"
                  width={130}
                  height={130}
                  priority
                />
              </Link> */}
            </NavigationMenuItem>

            <section className="mx-4 flex">
              {/* overview dropdown tab */}
              {/* <NavigationMenuItem className="hidden lg:!block ">
                <NavigationMenuTrigger>Overview</NavigationMenuTrigger>

                <NavigationMenuContent asChild className="!w-screen !max-w-none !absolute p-0">
                  <div className="px-8 py-10">
                    <OverviewMenuDropdown />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              {/* product dropdown tab */}
              <NavigationMenuItem className="hidden lg:!block ">
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>

                {/* overview content dropdown */}
                <NavigationMenuContent className="!w-screen !max-w-none !absolute p-0">
                  <div className="px-8 py-10">
                    <ProductDropDown products={menu} />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* pricing tab */}
              <NavigationMenuItem className="group lg:inline-flex h-9 w-max items-center justify-center bg-background px-4 py-2 text-gray-700 text-base tracking-wide rounded-full hover:bg-gcxprimary/10 font-semibold hidden">
                <Link href="/pricing">Pricing</Link>
              </NavigationMenuItem>

              {/* about us tab */}
              <NavigationMenuItem className="group lg:inline-flex h-9 w-max items-center justify-center bg-background px-4 py-2 text-gray-700 text-base tracking-wide rounded-full hover:bg-gcxprimary/10 font-semibold hidden">
                <Link href="/about-us">About Us</Link>
              </NavigationMenuItem>

              {/* contact us tab */}
              <NavigationMenuItem className="group lg:inline-flex h-9 w-max items-center justify-center bg-background px-4 py-2 text-gray-700 text-base tracking-wide rounded-full hover:bg-gcxprimary/10 font-semibold hidden">
                <Link href="/contact-us">Contact Us</Link>
              </NavigationMenuItem>
            </section>
          </NavigationMenuList>

          {/* right sectoin */}
          <NavigationMenuList></NavigationMenuList>
          <NavigationMenuList className="mt-5">
            <a href="https://stack-console.cloudlab.cam/login" className="bg-white text-gcxprimary font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:bg-gcxprimary/10">
              Log in
            </a>

            <a href="https://stack-console.cloudlab.cam/register" className="text-white bg-gcxprimary font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:bg-gcxdarkgreen">
              Sign up
            </a>
          </NavigationMenuList>
        </section>
      </NavigationMenu>
    </div>
  );
}
