"use client";

import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="w-full bg-gcxprimary px-4">
      <div className="max-w-7xl mx-auto py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-sm">
        {/* Left side - Phone number */}
        <div className="text-white text-center sm:text-left">
          Sales Hotline: (+855) 93 222 736
        </div>

        {/* Right side - Navigation links */}
        <div className="hidden lg:flex md:flex flex-col sm:flex-row sm:items-center sm:space-x-8 text-white gap-1 sm:gap-0 text-center sm:text-left">
          <Link href={"/about-us"} className="hover:underline">
            About Us
          </Link>
          <Link href={"/contact-us"} className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
