import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import LeadMagnet from "@/components/LeadMagnet";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Methodology />
      <TechStack />
      <About />
      <LeadMagnet />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
