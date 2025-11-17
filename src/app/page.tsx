import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import HowItWorks from "@/sections/HowItWorks";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <ProductShowcase />
      <CallToAction />
      <Footer />
    </>
  );
}
