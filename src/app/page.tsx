// import { LogoTicker } from "@/sections/LogoTicker";
// import { Pricing } from "@/sections/Pricing";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import HowItWorks from "@/sections/HowItWorks";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <LogoTicker /> */}
      <HowItWorks />
      <ProductShowcase />
      {/* <Pricing /> */}
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
