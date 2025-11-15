"use client";
import screenshot from "@/assets/Capture.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
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
      className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your Productivity</div>
          </div>
          <h2 className="section-title mt-5">Autonomous Productivity Layer</h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tighter text-[#010d3e] mt-5">
            {" "}
            <span className="font-bold">SolvoLab</span> builds and operates{" "}
            <span className="font-bold">AI workers</span> inside your business.
            They <span className="font-bold">integrate everywhere</span> your
            work happens — and{" "}
            <span className="font-bold">execute autonomously</span> .
          </p>
        </div>
        <div className="relative">
          <Image src={screenshot} alt="screenshot" className="mt-10" />
          <motion.img
            style={{ translateY: translateY }}
            src={pyramidImage.src}
            height={262}
            width={262}
            alt="pyramid"
            className="hidden md:block absolute -right-36 -top-32"
          />
          <motion.img
            style={{ translateY: translateY }}
            src={tubeImage.src}
            height={248}
            width={248}
            alt="tube"
            className="hidden md:block absolute -left-36 bottom-24"
          />
        </div>
      </div>
    </section>
  );
};
