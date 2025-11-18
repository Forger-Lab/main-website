"use client";
import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef } from "react";
export const HeroFloat = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
      <motion.img
        animate={{ translateY: [-30, 30] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeatType: "mirror",
          repeat: Infinity,
        }}
        src={"/assets/cog.png"}
        alt="cog"
        className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
      />
      <motion.img
        style={{ translateY: translateY }}
        src={"/assets/cylinder.png"}
        alt="cylinder"
        height={220}
        width={220}
        className="hidden md:block -top-8 -left-32 md:absolute"
      />
      <motion.img
        style={{ translateY: translateY, rotate: 30 }}
        src={"/assets/noodle.png"}
        alt="noodle image"
        width={220}
        className="hidden lg:block top-[524px] left-[448px] absolute rotate-30"
      />
    </div>
  );
};
