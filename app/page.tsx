import AboutDelivery from "@/components/aboutDelivery";
import Blogs from "@/components/blogs";
import Certified from "@/components/certified";
import CollaborationsSection from "@/components/collabration";
import Events from "@/components/events";
import Expertise from "@/components/expertise";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import IntegratedSection from "@/components/integrated";
import Purpose from "@/components/purpose";
import SecurityFrameworkSection from "@/components/securityFramework";


export default function Home() {
  return (
    <div className="w-full">
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
    <section className="w-full">
      <Certified/>
    </section>
    <section>
      <Events/>
    </section>
    <section>
      <Expertise/>
    </section>
    <section>
      <Blogs/>
    </section>
    <section>
      <Footer/>
    </section>
    </div>
    
  );
}
