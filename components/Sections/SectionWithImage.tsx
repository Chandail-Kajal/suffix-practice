export default function SectionWithImage({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <img
          src={image}
          alt="Integrated Solutions"
          className="h-[420px] w-full object-cover md:h-full"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-r from-[#006D77]/95 via-[#006D77]/70 to-transparent" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-350 px-6 md:pl-26 xl:pl-36 font-inter">
            <div className="max-w-full md:max-w-90 xl:max-w-150">
              <h2 className="text-3xl leading-tight tracking-wide font-bold text-white md:text-3xl max-w-full md:max-w-140 xl:text-5xl xl:leading-[1.15]">
                {title}
              </h2>

              <p className="mt-5 text-sm leading-7 md:leading-tight font-thin text-white max-w-full md:mt-4 md:text-sm md:max-w-180 xl:mt-6 xl:text-[18px] xl:leading-[1.45]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
