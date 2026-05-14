/* eslint-disable @next/next/no-img-element */
"use client";

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
    <section
      className={`w-full bg-[#f5f5f5] py-14 lg:py-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Label */}
        <p className="text-sm sm:text-base text-black mb-5">
          Blog & Events
        </p>

        {/* Heading */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="bg-[#00697B] px-5 sm:px-7 py-3">
            <h2 className="text-white text-3xl sm:text-5xl font-bold leading-none">
              {heading}
            </h2>
          </div>

          {/* Decorative Shape */}
          <div className="w-16 sm:w-20 shrink-0">
            <img
              src="/assets/collabrators/leftimage.svg"
              alt="decorative pattern"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 max-w-6xl text-base sm:text-lg text-black/85 leading-relaxed">
          {subheading}
        </p>

        {/* Main Grid */}
        <div className="mt-14 grid grid-cols-1 xl:grid-cols-[1.45fr_1fr] gap-10">
          {/* Featured Card */}
          <a
            href={featuredEvent.href}
            className="group relative overflow-hidden"
          >
            <div className="relative h-[420px] sm:h-[500px] overflow-hidden">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <h3 className="text-white text-2xl sm:text-4xl font-semibold leading-tight max-w-2xl">
                  {featuredEvent.title}
                </h3>

                <div className="mt-4 inline-flex items-center gap-2 text-white text-base font-medium">
                  Read the blog
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Side Cards */}
          <div className="flex flex-col justify-between gap-10">
            {sideEvents.map((event) => (
              <a
                key={event.id}
                href={event.href}
                className="group flex flex-col sm:flex-row gap-5"
              >
                {/* Image */}
                <div className="w-full sm:w-[210px] h-[230px] sm:h-[180px] overflow-hidden shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-[2rem] font-semibold text-black leading-snug group-hover:text-[#00697B] transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="mt-5 inline-flex items-center gap-2 text-[#007C91] text-lg font-medium">
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
      </div>
    </section>
  );
}