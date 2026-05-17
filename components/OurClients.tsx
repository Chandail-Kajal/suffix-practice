type ClientLogo = {
  id: number;
  name: string;
  logo: string;
};

const clientLogos: ClientLogo[] = [
  {
    id: 1,
    name: "LIC",
    logo: "/assets/collabrators/lic-logo.svg",
  },
  {
    id: 2,
    name: "Reliance",
    logo: "/assets/collabrators/Reliance.svg",
  },
  {
    id: 3,
    name: "ICICI Lombard",
    logo: "/assets/collabrators/ICICI-Bank.svg",
  },
  {
    id: 4,
    name: "Magma",
    logo: "/assets/collabrators/magma.svg",
  },
  {
    id: 5,
    name: "Tata AIG",
    logo: "/assets/collabrators/TATAAIG.svg",
  },
  {
    id: 6,
    name: "Shriram Capital",
    logo: "/assets/collabrators/shriram.svg",
  },
  {
    id: 7,
    name: "Bajaj Allianz",
    logo: "/assets/collabrators/BAJAJ.svg",
  },
  {
    id: 8,
    name: "IndusInd Bank",
    logo: "/assets/collabrators/indusind.svg",
  },
];

export const OurClients = () => {
  return (
    <div className="w-full font-open bg-linear-to-r from-[#3E9CB3] to-[#D7E6EA] py-20">
      <div className="mx-auto grid w-full xl:px-36 grid-cols-1 gap-16 px-6 lg:grid-cols-[40%_60%] lg:px-10">
        <div className="text-white">
          <p className="text-[20px] font-light uppercase tracking-wide xl:text-xl">
            OUR CLIENTS
          </p>

          <h3 className="mt-3 text-[48px] font-bold leading-[1.2] tracking-[-1px] xl:text-5xl xl:tracking-normal xl:leading-normal">
            Driving Success Through Trusted Partnerships
          </h3>

          {/* DESCRIPTION */}
          <p className=" text-[20px] leading-[1.65] xl:leading-normal font-normal xl:text-xl text-white/95">
            At Suffix Process Solutions Pvt. Ltd., our clients are at the heart
            of everything we do. We take pride in collaborating with leading
            BFSI organizations, delivering tailored solutions that drive
            efficiency, security, and growth. Their continued trust fuels our
            commitment to innovation and excellence.
          </p>
        </div>

        {/* RIGHT LOGOS */}
        <div className="grid grid-cols-6 gap-x-8 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
          {clientLogos.map((client) => (
            <div key={client.id} className="flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-22.5 w-auto object-contain transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
