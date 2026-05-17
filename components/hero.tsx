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
    setActiveSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`relative transition-opacity duration-500 ${
            activeSlide === index ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-[500px] object-cover md:h-auto"
          />

          {/* Overlay */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-[#007385]/72 md:w-[28%]" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-20">
            <div className="w-full h-full px-6 pt-24 md:px-26 md:pt-26 xl:px-36 xl:pt-36 flex items-center md:block">
              <div className="max-w-full md:max-w-120 lg:max-w-140 xl:max-w-170">
                <h1 className="text-white font-poppins font-semibold text-3xl leading-tight tracking-wide md:text-3xl lg:text-4xl xl:text-[3rem] xl:leading-14 whitespace-pre-line">
                  {banner.title}
                </h1>

                <p className="mt-5 max-w-full text-white font-poppins text-sm leading-7 font-thin md:mt-4 md:max-w-95 md:text-sm md:leading-loose lg:max-w-110 xl:mt-8 xl:max-w-150 xl:text-xl xl:leading-10">
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
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30"
      >
        <div className="h-10 md:h-10 lg:h-12 xl:h-18 aspect-square rounded-full bg-black/40 flex items-center justify-center">
          <ChevronLeft
            strokeWidth={2}
            className="text-white size-5 md:size-6 xl:size-12"
          />
        </div>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30"
      >
        <div className="h-10 md:h-10 lg:h-12 xl:h-18 aspect-square rounded-full bg-black/40 flex items-center justify-center">
          <ChevronRight
            strokeWidth={2}
            className="text-white size-5 md:size-6 xl:size-12"
          />
        </div>
      </button>

      {/* Pagination */}
      <div className="absolute bottom-5 right-1/2 translate-x-1/2 md:translate-x-0 md:bottom-6 md:right-26 xl:bottom-8 xl:right-36 z-30 flex items-center gap-3 md:gap-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2 w-6 rounded-full md:h-2 md:w-8 xl:h-2.5 xl:w-10 ${
              activeSlide === index
                ? "bg-white"
                : "border border-white bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}