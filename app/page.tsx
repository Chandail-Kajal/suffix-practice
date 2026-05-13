import AboutDelivery from "@/components/aboutDelivery";
import CollaborationsSection from "@/components/collabration";
import Header from "@/components/header";
import Hero from "@/components/hero";
import IntegratedSection from "@/components/integrated";
import Purpose from "@/components/purpose";
import SecurityFrameworkSection from "@/components/securityFramework";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
    <section>
      <Hero/>
    </section>
    <section>
      <AboutDelivery/>
    </section>
    <section className="w-full">
     <Purpose/>
    </section>
    <section>
      <IntegratedSection/>
    </section>
    <section>
      <CollaborationsSection/>
    </section>
    <section>
      <SecurityFrameworkSection/>
    </section>
    </div>
    
  );
}
