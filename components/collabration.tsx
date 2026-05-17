/* eslint-disable @next/next/no-img-element */
"use client";

import SectionWithTag from "./Sections/SectionWithTag";

export default function CollaborationsSection() {
  return (
    <SectionWithTag title="Our Valued Collaborations">
      <div className="md:mt-8 xl:mt-12 ">
        <p className="text-black xl:text-[22px] font-open lg:mb-2 md:text-[14px] md:font-medium md:mb-4">
          At Suffix Process Solutions, our unwavering commitment to excellence
          has earned the trust of some of the most respected names in the BFSI
          sector. We are proud to deliver cutting-edge process automation and
          compliance solutions to a growing list of forward-thinking
          organizations. Our clients rely on us for our precision, efficiency,
          and innovation, and we are honored to support their digital
          transformation journeys.
        </p>
      </div>
    </SectionWithTag>
  );
}
