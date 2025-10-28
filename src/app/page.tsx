import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import HeroSection from "@/components/ui/Hero";
import Journey from "@/components/ui/Journey";
import Sponsors from "@/components/ui/Sponsors";

export default function Page() {
  return (
    <div>
      <div id="home">
        <HeroSection />
      </div>
      <div id="a-propos">
        <About />
      </div>
      <div id="notre-aventure">
        <Journey />
      </div>
      <div id="sponsors">
        <Sponsors />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
