"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  
  ClockAlert,
  ClockArrowDown,
  MessageSquare,
  Loader,
  Weight,
  Loader2,
  Layers,
  Database,
  TrendingDown,
  Users,
  CheckCircle2,
  TrendingUp,
  Settings,
  DollarSign,
  ShieldCheck,
  BarChart3,
  HeartHandshake,
  Link as LinkLogo,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export const PainPoints = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const problems = [
    {
      title: "Leads lost due to slow follow‑up",
      icon: <ClockAlert className="w-14 h-14 text-white group-hover:animate-bounce" />,
      gradient: "from-orange-400 to-red-500",
      shadow: "group-hover:shadow-orange-200",
      size: "normal",
    },
    {
      title: "Customers stuck waiting for answers",
      icon: <Loader2 className="w-7 h-7 text-white group-hover:animate-spin" />,
      gradient: "from-blue-400 to-indigo-500",
      shadow: "group-hover:shadow-blue-200",
      size: "standard",
    },
    {
      title: "Teams buried in repetitive tasks",
      icon: <Weight className="w-7 h-7 text-white group-hover:animate-bounce" />,
      gradient: "from-purple-400 to-pink-500",
      shadow: "group-hover:shadow-purple-200",
      size: "standard",
    },
    {
      title: "Data friction slowing decisions",
      icon: <ClockArrowDown className="w-7 h-7 text-white group-hover:animate-pulse" />,
      gradient: "from-emerald-400 to-cyan-500",
      shadow: "group-hover:shadow-emerald-200",
      size: "standard",
    },
    {
      title: "Revenue drag from inefficient processes",
      icon: <TrendingDown className="w-16 h-10 text-white group-hover:animate-bounce" />,
      gradient: "from-red-400 to-rose-600",
      shadow: "group-hover:shadow-red-200",
      size: "normal",
    },
    {
      title: "Hiring pressure just to maintain output",
      icon: <Users className="w-7 h-7 text-white group-hover:animate-pulse" />,
      gradient: "from-gray-600 to-gray-800",
      shadow: "group-hover:shadow-gray-300",
      size: "standard",
    },
  ];

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
      icon: <Settings className="w-14 h-14 text-white group-hover:animate-spin" />,
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

  // Simple staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-[#d2dcff] to-[#ffffff] py-24 overflow-x-clip relative"
    >
      <motion.img
        src={"/assets/pyramid.png"}
        style={{ translateY }}
        height={262}
        width={262}
        alt="pyramid"
        className="hidden md:block absolute right-56 top-40 pointer-events-none z-10"
      />
      <motion.img
        src={"/assets/noodle.png"}
        style={{ translateY }}
        height={248}
        width={248}
        alt="tube"
        className="hidden md:block absolute md:left-[10%] md:-bottom-1 transform pointer-events-none z-10"
      />
      <div className="container">
        <div className="section-heading mb-24">
          <div className="flex justify-center">
            <div className="tag">Why SolvoLab?</div>
          </div>
          <h2 className="section-title md:min-h-[130px] mt-5">
            Grow Without the Growing Pains
          </h2>
          <p className="section-subtitle mt-5">
            More demand is a good problem — until you can’t keep up. Missed
            leads, delayed responses, manual admin, and scattered processes
            choke growth. SolvoLab builds AI‑powered systems that eliminate
            busywork and unlock scale.
          </p>
        </div>

        {/* Industries Section */}
        <div className="mb-24">
          <div className="flex justify-center">
            <div className="tag">Common scaling problems we eliminate</div>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5"
          >
            {problems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
            ${
              item.size === "wide"
                ? "lg:col-span-3"
                : item.size === "normal"
                ? "lg:col-span-2"
                : "lg:col-span-1"
            } 
            group relative overflow-hidden bg-white rounded-2xl p-8 
            border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300
          `}
              >
                {/* 1. Background Texture (Dot Pattern) to remove "empty" feel */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex items-start justify-between">
                    {/* 2. Premium Icon Container */}
                    <div
                      className={`
                relative flex items-center justify-center gap-2 w-fit h-fit rounded-xl p-6 
                bg-gradient-to-br ${item.gradient} 
                shadow-lg ${item.shadow}
                group-hover:scale-105 transition-transform duration-300
              `}
                    >
                      {/* Inner white ring for depth */}
                      <div className="absolute inset-0 rounded-md border border-white/20" />
                      {item.icon}
                    </div>

                    {/* Solved Badge (appears on hover) */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Solved
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>

                    {/* 3. Visual "Data" Filler (The dots you liked, but styled better) */}
                    <div className="mt-4 flex gap-1 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      {[...Array(item.size === "wide" ? 12 : 6)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full bg-gray-900 ${
                            i % 2 === 0 ? "w-2" : "w-4"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Services Grid */}

        <div className="">
          <div className="flex justify-center ">
            <div className="tag"> What you gain</div>
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
      </div>
    </section>
  );
};
