'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState({
    cog: false,
    cylinder: false,
    noodle: false
  });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
   <section ref={ref} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#735AB7,#EAEFEF_100%)] md:overflow-x-clip]">
      <div className="container">
        <div className="md:flex items-center ">
          <div className="md:w-[560px]">
            <div className="tag">
            ⚡ Live in days — not months.
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent mt-6">
            Scale Your Revenue, Not Your Headcount
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
            Custom AI systems that turn leads into customers and run the work that slows your team down — so you grow without the growing pains.
            </p>
            <div className="mt-[30px] flex gap-4">
            <div className="flex gap-1 items-center transition hover:shadow-md hover:scale-105">
              <Link href='#DemoSection' className="btn btn-primary">Try Free Demo</Link>
            </div>
            <div className="flex gap-1 items-center transition hover:shadow-md hover:scale-105">
              <Link href='#DemoSection' className="btn btn-primary">See Live AI In Action</Link>
            </div>
          </div>
            </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
            <motion.img 
              initial={{ opacity: 0 }}
              animate={ { 
                opacity: 1,
                translateY: [-30, 30]
              }}
              transition={{ 
                opacity: { duration: 0.5 },
                translateY: { duration: 3, ease: "easeInOut", repeatType:'mirror', repeat: Infinity }
              }}
              src={'/assets/cog.png'} 
              alt="cog" 
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              onLoad={() => {
                console.log('cog loaded');
                setImagesLoaded(prev => ({ ...prev, cog: true }));
              }}
            />
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ opacity: { duration: 0.5 } }}
              style={{ translateY }}
              src={'/assets/cylinder.png'} 
              alt="cylinder" 
              height={220} 
              width={220} 
              className="hidden md:block -top-8 -left-32 md:absolute"
              onLoad={() => {
                console.log('cylinder loaded');
                setImagesLoaded(prev => ({ ...prev, cylinder: true }));
              }}
            />
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ opacity: { duration: 0.5 } }}
              style={{ translateY, rotate: 30 }}
              src={'/assets/noodle.png'}  
              alt="noodle image"  
              width={220} 
              className="hidden lg:block top-[524px] left-[448px] absolute rotate-30"
              onLoad={() => {
                console.log('noodle loaded');
                setImagesLoaded(prev => ({ ...prev, noodle: true }));
              }}
            />
          </div>
        </div>
      </div>
    </section> 
  );
};

