"use client";

import { Facebook, Linkedin, Send } from "lucide-react";
import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="w-full bg-gcxprimary px-4">
      <div className="max-w-7xl mx-auto py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-sm">
        {/* Left side - Phone number */}
        <div className="text-white text-center sm:text-left">
          Sales Hotline: (+855) 93 222 738
        </div>

        {/* Right side - Social Media Icons */}
        <div className="lg:flex md:flex flex-row items-center justify-center sm:justify-end space-x-6 text-white hidden">
          <Link
            href="https://www.facebook.com/share/1ETdiaxvVv/"
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
      </div>
    </nav>
  );
}
