'use client'
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  useMotionValueEvent(translateY, "change", (latest) => {
    console.log(latest);
  });
  return (
    // <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEFEF_100%)] from-[#001e80] to-[#000000]">
    <section ref={ref} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#735AB7,#EAEFEF_100%)] md:overflow-x-clip]">
      <div className="container">
        <div className="md:flex items-center ">
          <div className="md:w-[478px]">
            <div className="tag">
            ⚡ Live in days — not months.
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent mt-6">
              {/* Your Idea.<br />
              Our Solution.
              <br />
              Real AI
              agents. */}
              Unleash Your AI Workforce
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
            Deploy autonomous <span className="font-bold">AI workers</span> that <span className="font-bold">communicate</span>, <span className="font-bold">coordinate</span>, and <span className="font-bold">complete real business tasks</span>.
            Scale operations without scaling headcount.
            </p>
            <div className="mt-[30px] flex gap-1 items-center ">
              <button className="btn btn-primary">Get In Touch</button>
              {/* <button className="btn btn-text gap-1">Learn more <ArrowRight className="w-4 h-4" /></button> */}
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
          <motion.img animate={{translateY: [-30, 30]}} transition={{ duration: 3, ease: "easeInOut",repeatType:'mirror', repeat: Infinity}} src={cogImage.src} alt="cog" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0" />
          <motion.img style={{translateY: translateY}} src={cylinderImage.src} alt="cylinder" height={220} width={220} className="hidden md:block -top-8 -left-32 md:absolute" />
          <motion.img style={{translateY: translateY, rotate: 30}} src={noodleImage.src}  alt="noodle image"  width={220} className="hidden lg:block top-[524px] left-[448px] absolute rotate-30" />
          </div>
        </div>
      </div>
    </section> 
  );
};
