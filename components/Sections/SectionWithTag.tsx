/* eslint-disable @next/next/no-img-element */
"use client";

import { PropsWithChildren } from "react";

export default function SectionWithTag({
  children,
  title,
  caption,
}: PropsWithChildren<{ title: string; caption?: string }>) {
  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="w-full py-10 xl:pb-16">
        <div className="mt-8 md:mt-10 xl:mt-18">
          {caption && (
            <p className="mb-3 px-6 text-sm text-black font-open md:mb-2 md:pl-26 xl:mb-2 xl:pl-36 xl:text-[22px]">
              {caption}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center rounded-r-sm bg-[#006D77] pl-6 pr-5 py-3 md:pl-26 md:pr-4 xl:pl-36 xl:pr-6">
              <h2 className="font-sans text-3xl font-bold tracking-wide text-white md:text-[34px] md:font-semibold lg:text-3xl xl:text-5xl">
                {title}
              </h2>
            </div>

            <img
              src="/assets/collabrators/leftimage.svg"
              alt="Design Pattern"
              className="h-12 w-auto object-contain md:h-12 lg:h-14 xl:h-20"
            />
          </div>
        </div>

        <div className="w-full px-6 md:px-26 xl:px-36">
          {children}
        </div>
      </div>
    </section>
  );
}