/* eslint-disable @next/next/no-img-element */
// components/Header.tsx

"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Solution",
    href: "/solution",
    hasDropdown: true,
  },
  {
    label: "Insights",
    href: "/insights",
    hasDropdown: true,
  },
  {
    label: "About us",
    href: "/about",
    hasDropdown: true,
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

export default function Header() {
  return (
    <header className="w-full font-opensans">
      {/* Top Header */}
      <div className="w-full bg-linear-to-r from-[#5AA9C7] to-[#4AC8BE]">
        <div className="max-w-420 mx-auto h-14 px-6 xl:px-24 flex items-center justify-end">
          <div className="flex items-center gap-10 text-white text-[14px] font-normal">
            {/* Links */}
            <Link
              href="/events"
              className="hover:text-white/80 transition-all duration-300"
            >
              Events
            </Link>

            <Link
              href="/blog"
              className="hover:text-white/80 transition-all duration-300"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="hover:text-white/80 transition-all duration-300"
            >
              Contact Us
            </Link>

            {/* Divider */}
            <div className="w-px h-9 bg-white/40" />

            {/* Search */}
            <button className="hover:opacity-80 transition-all duration-300">
              <img
                src="/assets/search.png
                "
                alt="search"
                className="w-6 h-6 object-contain"
              />
            </button>

            {/* Divider */}
            <div className="w-px h-9 bg-white/40" />

            {/* Facebook */}
            <button className="hover:opacity-80 transition-all duration-300">
              <img
                src="/assets/facebook.svg"
                alt="facebook"
                className="w-6 h-6 object-contain"
              />
            </button>

            {/* Linkedin */}
            <button className="hover:opacity-80 transition-all duration-300">
              <img
                src="/assets/linkdin.svg"
                alt="linkedin"
                className="w-6 h-6 object-contain"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-[#006F81]">
        <div className="max-w-420 mx-auto h-23.75 px-6 xl:px-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/assets/logo.svg"
              alt="SuffiX Logo"
              className="h-13 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-14">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-white text-[22px] font-normal hover:text-white/80 transition-all duration-300"
              >
                {item.label}

                {item.hasDropdown && (
                  <ChevronDown
                    size={20}
                    strokeWidth={2}
                    className="mt-0.5"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}