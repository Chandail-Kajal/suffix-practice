/* eslint-disable @next/next/no-img-element */
// components/AboutDelivery.tsx

"use client";

type DeliveryItem = {
  id: number;
  title: string;
  icon: string;
};

const deliveryItems: DeliveryItem[] = [
  {
    id: 1,
    title: "Hybrid Approach Combining\nHuman Expertise and Automation",
    icon: "/assets/icons/icon-1.svg",
  },
  {
    id: 2,
    title: "Tailored Solutions for\nthe BFSI Sector",
    icon: "/assets/icons/icon-2.svg",
  },
  {
    id: 3,
    title: "Process Centralization and\nEfficiency Optimization",
    icon: "/assets/icons/icon-3.svg",
  },
  {
    id: 4,
    title: "Advanced Data Security and\nCompliance",
    icon: "/assets/icons/icon-5.svg",
  },
  {
    id: 5,
    title: "Comprehensive\nAutomation Capabilities",
    icon: "/assets/icons/icon-6.svg",
  },
  {
    id: 6,
    title: "Proven Expertise with\nEstablished Clients",
    icon: "/assets/icons/icon-7.svg",
  },
];

export default function AboutDelivery() {
  return (
    <section className="w-full bg-[#006F81] px-6 py-12 md:py-0 md:pl-26 xl:pl-36 overflow-hidden">
      <div className="max-w-480 py-0 md:py-10 lg:py-17.5">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Left Content */}
          <div className="flex flex-col gap-4 xl:w-[18%] md:w-[21%] xl:gap-4 md:gap-2">
            <h2 className="text-white text-3xl leading-tight font-semibold tracking-normal max-w-full font-poppins md:text-2xl xl:text-4xl xl:font-semibold xl:max-w-105">
              Delivering for our clients at scale
            </h2>

            <p className="text-white text-sm leading-7 md:leading-tight font-thin md:text-xs xl:text-base xl:tracking-tight xl:leading-tight">
              We deliver consistent, high-quality solutions tailored to our
              clients’ needs—at any scale.
            </p>
          </div>

          {/* Right Features */}
          <div className="flex-1 font-poppins md:ml-10 xl:ml-30">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-y-6 xl:grid-cols-[auto_auto_auto] xl:gap-y-10 xl:mr-10">
              {deliveryItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-5 md:gap-6 xl:gap-10"
                >
                  <div>
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="aspect-square h-14 object-contain md:h-12 lg:h-14 xl:h-19"
                    />
                  </div>

                  <h3 className="text-white text-sm leading-6 font-normal whitespace-pre-line md:text-xs md:font-thin xl:text-md">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}