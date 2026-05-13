/* eslint-disable @next/next/no-img-element */
// components/Hero.tsx

"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Banner = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const banners: Banner[] = [
  {
    id: 1,
    title: "Empowering BFSI with\nSmarter, Secure Solutions",
    description:
      "At SuffiX, we combine advanced technology with expert human insight to streamline your processes, enhance compliance, and drive measurable business growth — all under one trusted roof.",
    image: "/assets/banner/hero.svg",
  },
  {
    id: 2,
    title: "Driving Innovation Through\nIntelligent Automation",
    description:
      "Deliver faster operations, scalable automation, and better customer experiences with future-ready enterprise solutions.",
    image: "/assets/banner/hero-2.svg",
  },
  {
    id: 3,
    title: "Secure Digital\nTransformation",
    description:
      "Empower your business with secure infrastructure, intelligent workflows, and measurable digital growth.",
    image: "/assets/banner/hero-3.svg",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`relative transition-opacity duration-500 ${
            activeSlide === index
              ? "opacity-100 block"
              : "opacity-0 hidden"
          }`}
        >
          {/* Background Image */}
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-auto object-cover"
          />

          {/* LEFT OVERLAY ONLY */}
          <div className="absolute inset-0">
            <div className="w-[28%] h-full bg-[#007385]/72" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="w-full max-w-480 mx-auto px-6 xl:px-0">
              {/* Text Container */}
              <div className="max-w-190 ml-27.5 -mt-5">
                {/* Heading */}
                <h1 className="text-white font-bold text-[50px] leading-[1.05] tracking-[-2px] whitespace-pre-line mt-0">
                  {banner.title}
                </h1>

                {/* Description */}
                <p className="mt-10 max-w-190 text-white text-[26px] leading-[1.9] font-normal">
                  {banner.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30"
      >
        <div className="w-17.5 h-17.5 rounded-full bg-black/40 flex items-center justify-center">
          <ChevronLeft
            size={42}
            strokeWidth={2}
            className="text-white"
          />
        </div>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30"
      >
        <div className="w-17.5 h-17.5 rounded-full bg-black/40 flex items-center justify-center">
          <ChevronRight
            size={42}
            strokeWidth={2}
            className="text-white"
          />
        </div>
      </button>

      {/* Pagination */}
      <div className="absolute bottom-8 right-30 z-30 flex items-center gap-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full ${
              activeSlide === index
                ? "w-11 bg-white"
                : "w-11 border border-white bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}