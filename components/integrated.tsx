/* eslint-disable @next/next/no-img-element */
"use client";

type IntegratedSectionProps = {
  title?: string;
  description?: string;
  image?: string;
};

export default function IntegratedSection({
  title = "Integrated Tech & Human Solutions",
  description = "At Suffix, we blend advanced automation with skilled manpower to deliver seamless, hybrid process solutions—offering the best of both worlds under one roof.",
  image = "/assets/integrated-bg.svg",
}: IntegratedSectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="relative w-full">
        <img
          src={image}
          alt="Integrated Solutions"
          className="h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-r from-[#006D77]/95 via-[#006D77]/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-350 xl:pl-36 font-inter">
            <div className="max-w-150">
              <h2 className="text-[42px] max-w-140 font-bold leading-[1.15] tracking-wide xl:text-5xl text-white md:text-[58px]">
                {title}
              </h2>

              <p className="mt-6 max-w-180 font-thin text-[18px] leading-[1.45] text-white md:text-[22px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
