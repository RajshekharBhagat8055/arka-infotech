import Hero from "@/components/Hero";
import Services from "@/components/services";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
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
      <WhyChooseUs />
      <Testimonials />
      <div id="contact">
        <ContactCTA />
      </div>
    </main>
  );
}
