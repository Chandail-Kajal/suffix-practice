/* eslint-disable @next/next/no-img-element */
"use client"
// components/blogs.tsx

interface BlogCard {
  id: number;
  title: string;
  image: string;
  href?: string;
}

interface BlogsProps {
  sectionLabel?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  blogs?: BlogCard[];
  className?: string;
}

export default function Blogs({
  sectionLabel = "Blogs",
  title = "Custom Solutions, Real Impact: Why Tailored Solutions Win",
  description = `Custom-coded solutions are designed to fit your exact business needs—no compromises. At Suffix, we build software that delivers real, lasting impact.`,
  buttonText = "View all",
  buttonHref = "#",
  blogs = [
    {
      id: 1,
      title: "Five big benefits to automating and digitizing your mailroom",
      image: "/assets/blogs/benefits.svg",
      href: "#",
    },
    {
      id: 2,
      title:
        "Preventing $26.6M in erroneous spend for a global manufacturer with FastCap® Finance Analytics",
      image: "/assets/blogs/FFA.svg",
      href: "#",
    },
    {
      id: 3,
      title:
        "Three critical strategies for a smooth Medicaid pharmacy deployment",
      image: "/assets/blogs/pharmacy.svg",
      href: "#",
    },
  ],
  className = "",
}: BlogsProps) {
  return (
    <section className={`w-full bg-[#f4f5f7] py-20 ${className}`}>
      <div className="max-w-412.5 mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-[620px_1fr] gap-20 items-start">
          {/* LEFT CONTENT */}
          <div className="pt-6">
            <p className="text-[18px] text-black mb-5">{sectionLabel}</p>

            <h2 className="text-black font-semibold leading-[1.15] tracking-[-0.03em] text-[38px]">
              {title}
            </h2>

            <p className="mt-8 text-[#1e1e1e] leading-[1.45] text-[20px] lg:text-[24px] max-w-140">
              {description}
            </p>

            {/* BUTTON */}
            <a
              href={buttonHref}
              className="group mt-24 inline-flex items-center gap-5 bg-linear-to-r from-[#0c7a87] to-[#56b7c3] px-10 py-5 text-white text-[22px] font-medium"
            >
              <span>{buttonText}</span>

              <span className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                ›
              </span>
            </a>
          </div>

          {/* RIGHT BLOGS */}
          <div className="grid  grid-cols-3 gap-7 object-cover ">
            {blogs.map((blog) => (
              <a
                key={blog.id}
                href={blog.href}
                className="group bg-white"
              >
                {/* IMAGE */}
                <div className="h-57.5 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="px-5 pt-8 pb-7 min-h-75 flex flex-col">
                  <h3 className="text-[19px] leading-[1.55] text-[#1d1d1d] font-normal">
                    {blog.title}
                  </h3>

                  <div className="mt-auto pt-20">
                    <span className="text-[#006d86] text-[18px] font-semibold">
                      Learn more
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