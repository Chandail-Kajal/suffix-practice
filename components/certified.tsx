"use client";

// components/certified.tsx

interface CertifiedProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
}

export default function Certified({
  title = "Certified Data Security & Privacy",
  description = `Our ISO 27001 & 27701 certifications and strict compliance
with data privacy laws ensure your sensitive information
remains protected at every stage.`,
  backgroundImage = "/assets/certified.svg",
  className = "",
}: CertifiedProps) {
  return (
    <section
      className={`w-full bg-[#f5f5f5] py-8 lg:py-12 ${className}`}
    >
      <div className="max-w-[1920px] mx-auto px-1 sm:px-4">
        <div className="relative overflow-hidden min-h-[340px] sm:min-h-[420px] lg:min-h-[500px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />

          {/* Main Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Left Gradient Overlay */}
          <div
            className="absolute inset-y-0 left-0 w-full lg:w-[62%]"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  rgba(0, 105, 123, 0.96) 0%,
                  rgba(0, 105, 123, 0.88) 45%,
                  rgba(0, 105, 123, 0.65) 72%,
                  rgba(0, 105, 123, 0.12) 100%
                )
              `,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-center h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[500px]">
            <div className="max-w-[650px] px-6 sm:px-10 lg:px-20">
              <h2 className="text-white text-[2rem] sm:text-[3rem] lg:text-[4.2rem] font-bold leading-[1.05] tracking-tight">
                {title}
              </h2>

              <p className="mt-5 text-white/95 text-base sm:text-lg lg:text-[1.45rem] leading-relaxed max-w-[580px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}