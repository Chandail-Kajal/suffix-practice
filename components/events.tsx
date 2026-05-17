/* eslint-disable @next/next/no-img-element */
"use client";

import SectionWithTag from "./Sections/SectionWithTag";

// components/Events.tsx

interface EventCard {
  id: number;
  title: string;
  image: string;
  href?: string;
}

interface EventsProps {
  heading?: string;
  subheading?: string;
  featuredEvent?: EventCard;
  sideEvents?: EventCard[];
  className?: string;
}

export default function Events({
  heading = "Events That Matter",
  subheading = `From industry conferences to exclusive launches, these are the events that define our journey, connect us with innovators, and shape meaningful collaborations across the globe.`,
  featuredEvent = {
    id: 1,
    title: "The Future of Scalable Digital Solutions",
    image: "/assets/events/future.svg",
    href: "#",
  },
  sideEvents = [
    {
      id: 2,
      title: "Why Custom Development Beats One-Size-Fits-All Tools",
      image: "/assets/events/custom-development.svg",
      href: "#",
    },
    {
      id: 3,
      title: "Building Better Digital Experiences Through Collaboration",
      image: "/assets/events/building-better.svg",
      href: "#",
    },
  ],
  className = "",
}: EventsProps) {
  return (
    <>
      <SectionWithTag caption="Blog & Events" title={heading}>
        <p className="text-sm leading-7 text-black/85 font-poppins md:mt-3 md:text-base lg:text-md lg:mt-4 xl:text-xl">
          {subheading}
        </p>

        <div className="mt-10 xl:mt-16 grid grid-cols-1 gap-10 md:mt-8 md:mb-2 md:grid-cols-2 lg:mb-4">
          {/* Featured Card */}
          <a
            href={featuredEvent.href}
            className="group relative overflow-hidden"
          >
            <div className="relative h-[320px] overflow-hidden rounded-lg xl:h-105">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-5 md:p-4">
                <h3 className="text-xl font-semibold leading-tight text-white md:text-md lg:text-lg">
                  {featuredEvent.title}
                </h3>

                <div className="mt-3 inline-flex items-center gap-2 text-sm font-thin text-white md:mt-2 md:text-xs">
                  Read the blog
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Side Cards */}
          <div className="flex flex-col justify-between gap-8 md:gap-10 xl:gap-14">
            {sideEvents.map((event) => (
              <a
                key={event.id}
                href={event.href}
                className="group flex flex-col gap-5 sm:flex-row xl:gap-10"
              >
                {/* Image */}
                <div className="h-56 w-full overflow-hidden shrink-0 sm:h-auto sm:w-auto md:h-30 aspect-square">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="aspect-square md:h-30 xl:h-45 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-semibold leading-snug text-black transition-colors duration-300 group-hover:text-[#00697B] md:text-md xl:text-2xl font-poppins">
                    {event.title}
                  </h3>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#007C91] md:mt-4 md:text-xs xl:text-sm">
                    Read the blog
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </SectionWithTag>
    </>
  );
}