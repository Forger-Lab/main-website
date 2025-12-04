'use client'
import Link from "next/link"
import {motion} from 'framer-motion'
import {
    TrendingUp,
    Settings,
    DollarSign,
    ShieldCheck,
    BarChart3,
    HeartHandshake,
  } from "lucide-react";

const services = [
    {
      title: "Increased Conversions",
      subtitle: "More conversions from the same lead volume",
      icon: <TrendingUp className="w-14 h-14 text-white" />,
      gradient: "from-green-500 to-teal-600",
      description:
        "Optimize your funnel efficiency, ensuring every lead receives prompt, tailored attention, maximizing your return on existing traffic.",
    },
    {
      title: "Happier Customers",
      subtitle: "Faster responses and happier customers",
      icon: <HeartHandshake className="w-14 h-14 text-white" />,
      gradient: "from-blue-500 to-indigo-600",
      description:
        "Deliver instant, high-quality support and follow-up, drastically reducing wait times and boosting overall customer satisfaction and loyalty.",
    },
    {
      title: "Automatic Scaling",
      subtitle: "Operations that scale automatically",
      icon: (
        <Settings className="w-14 h-14 text-white group-hover:animate-spin" />
      ),
      gradient: "from-purple-500 to-pink-600",
      description:
        "Handle spikes in demand and growth seamlessly without needing to hire or retrain internal teams, ensuring consistent service 24/7.",
    },
    {
      title: "Predictable ROI",
      subtitle: "Predictable cost with measurable ROI",
      icon: <DollarSign className="w-14 h-14 text-white" />,
      gradient: "from-yellow-500 to-orange-600",
      description:
        "Replace fluctuating variable labor costs with a fixed, measurable cost model, allowing for accurate budgeting and clear return on investment tracking.",
    },
    {
      title: "Reliable Experience",
      subtitle:
        "The reliability of software with the experience of a trained team member",
      icon: <ShieldCheck className="w-14 h-14 text-white" />,
      gradient: "from-gray-500 to-gray-700",
      description:
        "Combine the speed and precision of automation software with the critical thinking and nuanced judgment of a human expert.",
    },
    {
      title: "Actionable Insights",
      subtitle: "Strategic decisions driven by real-time data",
      icon: <BarChart3 className="w-14 h-14 text-white" />,
      gradient: "from-red-500 to-rose-600",
      description:
        "Gain deep visibility into performance metrics and customer interactions, empowering you to refine strategies based on hard data rather than intuition.",
    },
  ];

function WhatYouGain() {
  return (
    <section className="bg-gradient-to-b from-[#d2dcff] to-[#ffffff] overflow-x-clip relative py-24">
        <motion.img src={'/assets/spring.png'} width={360} alt="spring" className="absolute top-[19px] right-[50px]" />

        <div className="container">
          <div className="section-heading mb-16">
            <div className="flex justify-center">
              <div className="tag">What You Gain</div>
            </div>
            <h2 className="section-title mt-5">
              A Business That Feels Effortless
            </h2>
            <p className="section-subtitle mt-5">
              When AI takes the grind off your plate, growth stops feeling
              chaotic. You convert more without increasing workload, customers
              stay happier, and your operations run with the predictability of
              software and the nuance of a skilled team. SolvoLab gives you the
              systems, clarity, and momentum to scale smoothly — not
              stressfully.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1, boxShadow: "0px 14px 28px #EAEAEA" }}
                transition={{
                  // Initial entry
                  y: { duration: 0.5 },
                  opacity: { duration: 0.5 },
                  delay: index * 0.1,

                  // Hover state
                  scale: { duration: 0.2, type: "tween" },
                }}
                className={`
        card bg-white p-4 transition-all duration-300 border border-[#f1f1f1] my-2 group rounded-xl
        ${
          service.title.includes("Predictable")
            ? "md:col-span-1"
            : "md:col-span-1"
        }
      `}
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${service.gradient} rounded-2xl p-6 mb-6 h-48 flex items-center justify-center group-hover:scale-105 transition duration-200`}
                >
                  {/* The Shine Effect Overlay */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12" />
                  <div className="transform group-hover:animate-bounce">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-md text-gray-700 mb-1 font-medium">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-[30px] flex justify-center gap-4">
          <div className="flex gap-1 items-center transition hover:shadow-md hover:scale-105 ">
            <Link href="#DemoSection" className="btn btn-primary ">
              See Exactly How This Works
            </Link>
          </div>
        </div>
    </section>
  )
}

export default WhatYouGain