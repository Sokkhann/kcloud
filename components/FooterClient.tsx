"use client";
import React, { useState } from "react";
import { Facebook, Linkedin, Send, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavbarProducts } from "@/type/dataTypes";

// ----------------------------------------------------------------------
// 1. Reusable Component for List Sections (Now defaults to Mobile Dropdown)
// ----------------------------------------------------------------------
interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
  // Use a prop to disable dropdown behavior for the social icons, etc.
  disableMobileDropdown?: boolean;
}

const FooterColumn = ({
  title,
  children,
  disableMobileDropdown = false,
}: FooterColumnProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    // Only toggle if the dropdown is NOT disabled
    if (!disableMobileDropdown) {
      setIsOpen(!isOpen);
    }
  };

  // Determine if we should show the toggle button and collapsed content
  const shouldBeAccordion = !disableMobileDropdown;

  return (
    <div className="relative  pb-2">
      {shouldBeAccordion ? (
        // Mobile Toggle Button (Accordion Header) - Visible only on small screens
        <button
          onClick={toggleMenu}
          className="w-full text-left font-bold py-2 rounded-md text-gray-900 flex justify-between items-center sm:hidden "
          aria-expanded={isOpen}
        >
          <span>{title}</span>
          {/* Chevron icon rotates when open */}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
              }`}
          />
        </button>
      ) : (
        // Static Title for non-dropdown sections (e.g., Social Links)
        <h3 className="font-bold mb-4 text-gray-900">{title}</h3>
      )}

      {/* Desktop Title - Always visible on desktop */}
      <h3 className="font-bold mb-4 text-gray-900 hidden sm:block">
        {shouldBeAccordion ? title : null}
      </h3>

      {/* List Content - Conditionally displayed on mobile, always on desktop */}
      <div
        // Logic: On mobile, use `isOpen ? 'block' : 'hidden'`. On desktop/sm, always use `block`.
        className={`${shouldBeAccordion && !isOpen ? "hidden" : "block"
          } sm:block mt-2 sm:mt-0`}
      >
        <ul className="space-y-2">{children}</ul>
      </div>
    </div>
  );
};


const additionalMenuItems: NavbarProducts[] = [
  {
    title: "Virtual Machine",
    category: "Compute",
    path: "/products/virtual-machine",
    image: "/feature-carousel-vm.png",
    description: "Deploy scalable, high-performance virtual computing instances in seconds."
  },
  {
    title: "Kubernetes",
    category: "Compute",
    path: "/products/kubernetes",
    image: "/feature-carousel-k8.png",
    description: "Fully managed container orchestration to simplify deploying and scaling applications."
  },
  {
    title: "IP Address",
    category: "Networking",
    path: "/products/ip-address",
    image: "/feature-carousel-ip.png",
    description: "Manage reserved public and private IP addresses for your cloud infrastructure."
  },
  {
    title: "Load Balancer",
    category: "Networking",
    path: "/products/load-balancer",
    image: "/feature-carousel-load-balancer.png",
    description: "Optimize application availability and performance by intelligently distributing incoming traffic."
  },
  {
    title: "VPC",
    category: "Networking",
    path: "/products/vpc",
    image: "/feature-carousel-vm.png",
    description: "Isolate your cloud resources within a secure, private network environment."
  },
  {
    title: "Block Storage",
    category: "Storage",
    path: "/products/block-storage",
    image: "/feature-carousel-block-storage.png",
    description: "High-performance, scalable SSD storage for your high-demand applications."
  },
  {
    title: "Block Storage Snapshot",
    category: "Storage",
    path: "/products/snapshot",
    image: "/feature-carousel-block-storage-snapshot.png",
    description: "Capture point-in-time copies of your block storage volumes for easy data recovery."
  },
  {
    title: "Virtual Machine Backup",
    category: "Storage",
    path: "/products/vm-backup",
    image: "/feature-carousel-vm.png",
    description: "Full-system backups for your virtual machines to prevent data loss."
  },
];

// ----------------------------------------------------------------------
// 2. Main Footer Component
// ----------------------------------------------------------------------
export default function FooterClient() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-none sm:grid-cols-3 lg:grid-cols-5 gap-4 text-gray-700">
        <div className="sm:border-none border-b-1">
          <FooterColumn title="Company">
            <li>
              <Link
                href="/about-us"
                className="hover:underline cursor-pointer md:text-base text-sm"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/policy"
                className="hover:underline cursor-pointer md:text-base text-sm"
              >
                Privacy Policy
              </Link>
            </li>

          </FooterColumn>
        </div>

        <div className="sm:border-none border-b-1">
          <FooterColumn title="Products">
            {additionalMenuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="sm:border-none border-b-1">
          <FooterColumn title="Resources">
            <li>
              <Link
                href="/pricing"
                className="hover:underline cursor-pointer md:text-base text-sm"
              >
                Pricing
              </Link>
            </li>
            {/* <li>
              <Link
                href="/docs"
                className="hover:underline cursor-pointer md:text-base text-sm"
              >
                Documentation
              </Link>
            </li> */}
          </FooterColumn>
        </div>

        <div className="sm:border-none border-b-1">
          <FooterColumn title="Contact">
            <li>
              <Link
                href="/contact-us"
                className="hover:underline cursor-pointer md:text-base text-sm"
              >
                Contact Us
              </Link>
            </li>
          </FooterColumn>
        </div>

        {/* Connect Section (DISABLED Dropdown behavior) */}
        <FooterColumn title="Connect With Us" disableMobileDropdown={true}>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-green-600 transition"
              aria-label="Facebook"
            >
              <Facebook strokeWidth={1.25} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-green-600 transition"
              aria-label="LinkedIn"
            >
              <Linkedin strokeWidth={1.25} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-green-600 transition"
              aria-label="Email Newsletter"
            >
              <Send strokeWidth={1.25} />
            </a>
          </div>
        </FooterColumn>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Image
              src="/gcx-logo.png"
              alt="GCX Cloud Services Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2025 GCX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
