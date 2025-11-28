"use client";
import DemoInput from "@/components/DemoInput";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={ref}
      id='DemoSection'
      className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip  lg:min-h-[700px]"
    >
      <div className="container">
        <div className="section-heading mb-10">
          <div className="flex justify-center">
            <div className="tag">Get a Demo</div>
          </div>
          <h2 className="section-title mt-5">See the AI Workforce in Action</h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tighter text-[#010d3e] mt-5">
            {" "}
            Share your email, let our AI sales agent reach out immediately, and
            handle all your questions on the spot.
          </p>
        </div>
        <div className="relative flex justify-center">
          <DemoInput />
          <motion.img
            style={{ translateY: translateY }}
            src={'/assets/pyramid.png'}
            height={262}
            width={262}
            alt="pyramid"
            className="hidden md:block absolute right-36 top-32"
          />
          <motion.img
            style={{ translateY: translateY }}
            src={'/assets/tube.png'}
            height={248}
            width={248}
            alt="tube"
            className="hidden md:block absolute left-36 bottom-24"
          />
        </div>
      </div>
    </section>
  );
};
