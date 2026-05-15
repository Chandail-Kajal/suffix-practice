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
    <section className="w-full bg-[#006F81] xl:px-36 overflow-hidden">
      <div className="max-w-480 py-17.5">
        <div className="grid grid-cols-12 gap-x-14 gap-y-16 items-start">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-3">
            <h2 className="text-white text-[45px] leading-[1.05] xl:text-4xl font-semibold tracking-normal max-w-105">
              Delivering for our clients at scale
            </h2>

            <p className="mt-8 text-white text-[18px] leading-[1.45] font-thin max-w-105">
              We deliver consistent, high-quality solutions tailored to our
              clients’ needs—at any scale.
            </p>
          </div>

          {/* Right Features */}
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-16">
              {deliveryItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-7"
                >
                  {/* Icon */}
                  <div className="shrink-0 pt-1">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-19.5 h-19.5 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <h3 className="text-white text-[20px] xl:text-lg xl:font-thin leading-[1.45] font-normal whitespace-pre-line">
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