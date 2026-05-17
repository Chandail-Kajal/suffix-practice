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
    <header className="w-full font-open">
      {/* Top Bar */}
      <div className="w-full bg-linear-to-r to-[#3EB7B2] from-[#419DB4]">
        <div className="flex items-center justify-center px-4 py-2 md:justify-end xl:px-35 xl:py-3 md:px-22 md:py-3 lg:py-2.5">
          <div className="flex items-center gap-4 text-white text-[12px] font-normal md:gap-8 md:text-xs md:font-medium lg:text-sm lg:font-normal xl:text-[18px] font-thin">
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

            <div className="flex justify-evenly gap-3 pl-3 border-l border-white/40 md:gap-3 md:pl-3 xl:pl-6">
              <button className="hover:opacity-80 transition-all duration-300">
                <img
                  src="/assets/search.png"
                  alt="search"
                  className="aspect-square h-4 object-contain md:h-4 lg:h-4.5 xl:h-6"
                />
              </button>

              <div className="border-l border-white/40" />

              <button className="hover:opacity-80 transition-all duration-300">
                <img
                  src="/assets/facebook.svg"
                  alt="facebook"
                  className="aspect-square h-4 object-contain md:h-4 lg:h-4.5 xl:h-6"
                />
              </button>

              <button className="hover:opacity-80 transition-all duration-300">
                <img
                  src="/assets/linkdin.svg"
                  alt="linkedin"
                  className="aspect-square h-4 object-contain md:h-4 lg:h-4.5 xl:h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full flex items-center justify-between bg-[#006F81] px-4 py-4 xl:px-36 md:px-26 md:py-4 lg:py-4">
        <Link href="/">
          <img
            src="/assets/logo.svg"
            alt="SuffiX Logo"
            className="h-8 w-auto object-contain md:h-8 lg:h-9 xl:h-12"
          />
        </Link>

        <nav className="hidden md:flex items-center md:gap-8 lg:gap-8 xl:gap-14">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-white md:text-md lg:text-lg md:font-normal xl:text-2xl font-open hover:text-white/80 transition-all duration-300"
            >
              {item.label}

              {item.hasDropdown && (
                <ChevronDown size={20} strokeWidth={2} className="mt-0.5" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center justify-center">
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
    </header>
  );
}