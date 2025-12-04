import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Demos } from "@/sections/Demos";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import HowItWorks from "@/sections/HowItWorks";
import { PainPoints } from "@/sections/PainPoints";
import WhatYouGain from "@/sections/Whatyougain";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PainPoints/>
      <WhatYouGain/>
      <Services />
      {/* <HowItWorks /> */}
      <Demos />
      <CallToAction />
      <Footer />
    </>
  );
}
