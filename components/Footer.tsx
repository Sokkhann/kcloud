import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-gray-700">
        {/* Company Section */}
        <div>
          <h3 className="font-bold mb-4 text-gray-900">Company</h3>
          <ul className="space-y-2">
            <Link href="/about-us" className="hover:underline cursor-pointer">
              About Us
            </Link>
            <li className="hover:underline cursor-pointer">Customers</li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="font-bold mb-4 text-gray-900">Products</h3>
          <ul className="space-y-2">
            <Link href="/products/virtual-machine">
              <li className="hover:underline cursor-pointer">Virtual Machines</li>
            </Link>
            <Link href="/products/vnf-appliance">
              <li className="hover:underline cursor-pointer">VNF Appliances</li>
            </Link>
            <Link href="/products/kubernetes">
              <li className="hover:underline cursor-pointer">Kubernetes</li>
            </Link>
            <Link href="/products/app">
              <li className="hover:underline cursor-pointer">Apps</li>
            </Link>
            <Link href="/products/snapshot">
              <li className="hover:underline cursor-pointer">Snapshots</li>
            </Link>
            <Link href="/products/backup">
              <li className="hover:underline cursor-pointer">Backups</li>
            </Link>
            <Link href="/products/template">
              <li className="hover:underline cursor-pointer">Templates</li>
            </Link>
            <Link href="/products/iso">
              <li className="hover:underline cursor-pointer">ISOs</li>
            </Link>
            <Link href="/products/network">
              <li className="hover:underline cursor-pointer">Networks</li>
            </Link>
            <Link href="/products/load-balancer">
              <li className="hover:underline cursor-pointer">Load Balancers</li>
            </Link>
            <Link href="/products/dns">
              <li className="hover:underline cursor-pointer">DNS</li>
            </Link>
          </ul>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="font-bold mb-4 text-gray-900">Solutions</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Online Education</li>
            <li className="hover:underline cursor-pointer">Audio & Video</li>
            <li className="hover:underline cursor-pointer">Game Solution</li>
            <li className="hover:underline cursor-pointer">
              Game Media Solution
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-bold mb-4 text-gray-900">Resources</h3>
          <ul className="space-y-2">
            <Link href="/pricing">
              <li className="hover:underline cursor-pointer">Pricing</li>
            </Link>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold mb-4 text-gray-900">Contact</h3>
          <ul className="space-y-2">
            <Link href="/contact-us" className="hover:underline cursor-pointer">
              Contact Us
            </Link>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/gcx-logo.png"
              alt="GCX Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 GCX. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-green-600 transition"
              aria-label="Facebook"
            >
              <Facebook strokeWidth={1.25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
