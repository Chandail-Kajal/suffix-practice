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
      <div className="w-full bg-linear-to-r to-[#3EB7B2] from-[#419DB4]">
        <div className="flex items-center justify-end xl:px-35 xl:py-3">
          <div className="flex items-center gap-10 text-white text-[14px] xl:text-[18px] font-thin">
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

            <div className="flex justify-evenly gap-6 border-l pl-6 border-white/40">
              <button className="hover:opacity-80 transition-all duration-300">
                <img
                  src="/assets/search.png
                "
                  alt="search"
                  className="w-6 h-6 object-contain"
                />
              </button>

              <div className="w-px h-9 bg-white/40" />

              <button className="hover:opacity-80 transition-all duration-300">
                <img
                  src="/assets/facebook.svg"
                  alt="facebook"
                  className="w-6 h-6 object-contain"
                />
              </button>

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
      </div>

      <div className="w-full flex justify-between bg-[#006F81] xl:px-36 py-6">
        <Link href="/" className="">
          <img
            src="/assets/logo.svg"
            alt="SuffiX Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-14">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-white text-[22px] xl:text-2xl font-open font-medium hover:text-white/80 transition-all duration-300"
            >
              {item.label}

              {item.hasDropdown && (
                <ChevronDown size={20} strokeWidth={2} className="mt-0.5" />
              )}
            </Link>
          ))}
        </nav>

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
      {/* </div> */}
    </header>
  );
}
