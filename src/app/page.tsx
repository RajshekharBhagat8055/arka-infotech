import Hero from "@/components/LandingPageComponents/Hero";
import Services from "@/components/LandingPageComponents/services";
import About from "@/components/LandingPageComponents/About";
import Technologies from "@/components/LandingPageComponents/Technologies";
import Solutions from "@/components/LandingPageComponents/Solutions";
import IndustriesWeServe from "@/components/LandingPageComponents/IndustriesWeServe";
import WhyChooseUs from "@/components/LandingPageComponents/WhyChooseUs";
import Testimonials from "@/components/LandingPageComponents/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      <div id="industries">
        <IndustriesWeServe />
      </div>
      <div id="solutions">
        <Solutions />
      </div>
      <WhyChooseUs />
      <Testimonials />
      <div id="contact">
        <ContactCTA />
      </div>
    </main>
  );
}
