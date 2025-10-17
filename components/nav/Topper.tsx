"use client";

import Link from "next/link";

export default function TopNavBar() {

  return (
    <nav className="w-full bg-green-950 ">
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between text-sm">
        {/* Left side - Phone number */}
        <div className="text-white">
          Sales Hotline: (+855) 93 222 736
        </div>

        {/* Right side - Navigation links */}
        <div className="flex items-center space-x-8 text-white">
          <Link href={"/about-us"} className="hover:underline">About Us</Link>
          <Link href={"/contact-sale"} className="hover:underline">Contact Sales</Link>
        </div>
      </div>
    </nav>
  );
}
