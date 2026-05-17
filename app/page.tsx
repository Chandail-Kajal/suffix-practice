import AboutDelivery from "@/components/aboutDelivery";
import Blogs from "@/components/blogs";
import CollaborationsSection from "@/components/collabration";
import Events from "@/components/events";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { OurClients } from "@/components/OurClients";
import Purpose from "@/components/purpose";
import SectionWithImage from "@/components/Sections/SectionWithImage";
import SecurityFrameworkSection from "@/components/securityFramework";

export default function Home() {
  const integratedSectionData = {
    title: "Integrated Tech & Human Solutions",
    description:
      "At Suffix, we blend advanced automation with skilled manpower to deliver seamless, hybrid process solutions—offering the best of both worlds under one roof.",
    image: "/assets/integrated-bg.svg",
  };

  const certifiedSectionData = {
    title: "Certified Data Security & Privacy",
    description: `Our ISO 27001 & 27701 certifications and strict compliance
with data privacy laws ensure your sensitive information
remains protected at every stage.`,
    image: "/assets/certified.svg",
  };

  const expertiesSectionData = {
    title: "Tailored BFSI Expertise",
    description: `With deep BFSI domain knowledge and customizable solutions,
we help you optimize workflows, reduce risk, and drive
measurable business growth.`,
    image: "/assets/expertise.svg",
  };

  return (
    <div className="w-full">
      <Header />
      <section>
        <Hero />
      </section>
      <section>
        <AboutDelivery />
      </section>
      <section className="w-full">
        <Purpose />
      </section>
      <section>
        <SectionWithImage {...integratedSectionData} />
      </section>
      <section>
        <CollaborationsSection />
      </section>
      <section>
        <OurClients />
      </section>
      <section>
        <SecurityFrameworkSection />
      </section>
      <section className="w-full">
        <SectionWithImage {...certifiedSectionData} />
      </section>
      <section>
        <Events />
      </section>
      <section>
        <SectionWithImage {...expertiesSectionData} />
      </section>
      <section>
        <Blogs />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
