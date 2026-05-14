"use client"

// components/expertise.tsx

interface ExpertiseProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
  overlayOpacity?: number;
}

export default function Expertise({
  title = "Tailored BFSI Expertise",
  description = `With deep BFSI domain knowledge and customizable solutions,
we help you optimize workflows, reduce risk, and drive
measurable business growth.`,
  backgroundImage = "/assets/expertise.svg",
  className = "",
  overlayOpacity = 92,
}: ExpertiseProps) {
  return (
    <section
      className={`relative overflow-hidden w-full h-105 sm:h-125 lg:h-140 ${className}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Main Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(0, 104, 120, ${overlayOpacity / 100}) 0%,
              rgba(0, 104, 120, ${overlayOpacity / 100}) 28%,
              rgba(0, 104, 120, 0.72) 42%,
              rgba(0, 104, 120, 0.28) 58%,
              rgba(0, 104, 120, 0) 75%
            )
          `,
        }}
      />

      {/* Extra Soft Fade */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-180 px-6 sm:px-12 lg:px-24">
          <h2 className="text-white font-bold leading-tight tracking-tight text-[42px] sm:text-[58px] lg:text-[72px]">
            {title}
          </h2>

          <p className="mt-6 text-white/95 leading-relaxed text-lg sm:text-2xl max-w-190">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}