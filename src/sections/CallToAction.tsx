'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export const CallToAction = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target:ref,
    offset:['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section ref={ref} className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
        <h2 className="section-title">Transform Your Workflow Now</h2>
        <p className="section-subtitle mt-5">Get started in minutes and experience the difference that SolvoLab can make for your business</p>
         <motion.img src={'/assets/star.png'} style={{translateY}} width={360} alt="star" className="absolute -top-[137px] -left-[350px]" />
          <motion.img src={'/assets/spring.png'} style={{translateY}} width={360} alt="spring" className="absolute -top-[19px] -right-[331px]" />
        </div>
          <div className="flex gap-2 mt-10 justify-center">
            <Link href='#DemoSection' className="btn btn-primary">Get in Touch</Link>
          </div>
      </div>
    </section>
  );
};

