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
    <section className="w-full bg-[#F7F7F7] py-14 px-6 md:px-0 md:py-20">
      <div className="flex flex-col gap-14 md:flex-row md:justify-between md:gap-20 xl:gap-48 items-start">
        {/* LEFT SIDE */}
        <div className="w-full md:w-[50%] md:sticky md:top-20 h-fit self-start">
          <div className="relative z-10 inline-block">
            <h2 className="text-5xl font-bold uppercase leading-none font-poppins md:text-6xl xl:text-[96px]">
              <span className="text-white py-0 pr-2 rounded-r-md pl-6 bg-[#006D77] md:pl-26 xl:pr-1 xl:pl-36">
                PUR
              </span>
              <span className="text-[#006D77]">POSE</span>
            </h2>
          </div>

          <p className="mt-5 text-2xl font-normal leading-normal text-black font-poppins md:mt-4 md:pl-26 md:text-xl xl:mt-5 xl:pl-36 xl:text-3xl">
            Built Solutions for the BFSI Sector
          </p>

          <div className="mt-8 space-y-6 text-sm leading-7 md:leading-tight font-open text-black md:mt-6 md:space-y-5 md:pl-26 md:text-sm xl:mt-12 xl:space-y-10 xl:pl-36 xl:text-xl xl:font-normal xl:leading-tight">
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
              accuracy with the nuanced wisdom of human expertise. Our
              philosophy of “Hi-tech. Hybrid. Human.” drives every solution we
              deliver, ensuring streamlined workflows, cost reduction, enhanced
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
        <div className="w-full space-y-12 md:max-w-150 md:pr-27 xl:max-w-220 xl:space-y-14 xl:pr-36">
          {services.map((service) => (
            <div key={service.id}>
              {/* IMAGE */}
              <div className="overflow-hidden rounded-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full object-cover rounded-lg md:h-50 xl:h-80"
                />
              </div>

              {/* TEXT */}
              <div className="pt-4 font-poppins">
                {/* TITLE */}
                <h3 className="text-2xl font-semibold leading-tight text-black md:text-xl xl:text-3xl">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm leading-7 md:leading-tight text-black md:mt-2 md:text-[13px] xl:text-lg xl:leading-normal">
                  {service.description}
                </p>

                {/* BUTTON */}
                <button className="mt-5 flex items-center gap-2 text-sm font-bold text-[#0088B2] font-open md:mt-4 md:text-[12px] xl:text-lg">
                  <span className="flex h-6 aspect-square items-center justify-center rounded-full border-2 border-[#0088B2] text-sm leading-none md:h-5 md:text-[10px] xl:h-8 xl:text-lg">
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