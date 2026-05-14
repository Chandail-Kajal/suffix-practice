/* eslint-disable @next/next/no-img-element */
"use client";

type ServiceCard = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const services: ServiceCard[] = [
  {
    id: 1,
    title: "Human-Driven Process Solutions",
    description:
      "At Suffix Process Solutions Pvt. Ltd., we provide industry-trained manpower tailored specifically for BFSI operational workflow.",
    image: "/assets/purpose/purpose-1.svg",
  },
  {
    id: 2,
    title: "RPA Solutions",
    description:
      "Our Robotic Process Automation (RPA) services streamline manual, rule-based, and time-consuming tasks across.",
    image: "/assets/purpose/purpose-2.svg",
  },
  {
    id: 3,
    title: "Automation Tools",
    description:
      "Our intelligent automation tools harness AI, NLP and advanced rule-based engines to deliver capabilities.",
    image: "/assets/purpose/purpose-3.svg",
  },
];

export default function PurposeSection() {
  return (
    <section className="w-full bg-[#F7F7F7] py-20">

      {/* MAIN CONTAINER */}
      <div className=" grid max-w-350 gap-48 m-4 px-5 grid-cols-[42%_58%]">


        {/* LEFT SIDE */}
        <div className="sticky top-20 h-fit self-start">

          {/* PURPOSE HEADING */}
          <div className="relative z-10 inline-block">

            {/* Teal Background Bar */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-23 w-85 bg-[#006D77]" />


            {/* Text */}
            <h2 className="text-[96px] font-extrabold uppercase leading-none tracking-[-4px]">
              <span className="text-white">PUR</span>
              <span className="text-[#006D77]">POSE</span>
            </h2>
          </div>

          {/* SUB HEADING */}
          <p className="mt-5 ml-28 text-3xl font-normal leading-normal text-black">
            Built Solutions for the BFSI Sector
          </p>

          {/* CONTENT */}
          <div className="mt-12 ml-28 max-w-190 space-y-10 text-lg leading-normal text-black">

            <p>
              At Suffix Process Solutions Pvt. Ltd., we empower Banking,
              Financial Services, and Insurance (BFSI) institutions to thrive in
              a rapidly evolving, Phygital landscape by delivering intelligent,
              secure, and comprehensive process solutions. Our unique strength
              lies in seamlessly integrating manpower-driven services,
              cutting-edge automation tools, and Robotic Process Automation
              (RPA)—providing both tech and non-tech solutions under one unified
              roof.
            </p>

            <p>
              In a world increasingly defined by digital precision and human
              insight, we passionately believe in the synergy of technology’s
              accuracy with the nuanced wisdom of human expertise. Our philosophy
              of “Hi-tech. Hybrid. Human.” drives every solution we deliver,
              ensuring streamlined workflows, cost reduction, enhanced
              compliance, and superior service quality.
            </p>

            <p>
              Committed to the highest standards of data security and privacy,
              our services comply fully with ISO 27001:2022, ISO 27701:2019, and
              the Digital Personal Data Protection Act (DPDPA)—guaranteeing
              trust, transparency, and accountability at all operational levels.
              “At Suffix, we commit to being your trusted partner—elevating
              excellence into extraordinary results, turning potential into
              tangible success, and shaping every effort into your unique
              hallmark.”
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-14">
          {services.map((service) => (
            <div key={service.id}>

              {/* IMAGE */}
              <div className="overflow-hidden rounded-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-105 w-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="pt-4">

                {/* TITLE */}
                <h3 className="text-sm font-semibold leading-tight text-black">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-[13px] leading-[1.7] text-black">
                  {service.description}
                </p>

                {/* BUTTON */}
                <button className="mt-4 flex items-center gap-2 text-[12px] font-medium text-[#0088B2]">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#0088B2] text-[10px] leading-none">
                    +
                  </span>

                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}