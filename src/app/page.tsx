import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Demos } from "@/sections/Demos";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import HowItWorks from "@/sections/HowItWorks";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Demos />
      <CallToAction />
      <Footer />
    </>
  );
}
