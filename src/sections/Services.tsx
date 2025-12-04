"use client";
import LazyLottie from "@/components/LazyLottie";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Workflow, BrainCircuit, Layers } from "lucide-react";
import { useRef } from "react";

// SVG Icons for Services
const ServiceIcons = {
  integration: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-12 h-12 text-blue-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  ),
  ml: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-12 h-12 text-purple-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 4.5 1.5 12l7.5 7.5"
        opacity="0.3"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        opacity="0.1"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6M9 12h6" />
    </svg>
  ),
  data: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-12 h-12 text-pink-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
      />
    </svg>
  ),
};

// SVG Icons for Industries
const IndustryIcons = {
  support: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 text-blue-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.286 3.423.379.35.028.71.048 1.072.057h7.35a3.75 3.75 0 0 0 3.75-3.75V6A3.75 3.75 0 0 0 17.25 2.25H6.75A3.75 3.75 0 0 0 3 6v4.761Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 17.25a2.25 2.25 0 0 0 2.25 2.25h2.25a2.25 2.25 0 0 0 2.25-2.25v-4.5a2.25 2.25 0 0 0-2.25-2.25H3v9Z"
      />
    </svg>
  ),
  onboarding: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 text-green-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  ),
  sales: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 text-purple-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
      />
    </svg>
  ),
  dataEntry: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 text-orange-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  ),
  moderation: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 text-red-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      />
    </svg>
  ),
  scheduling: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 text-teal-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
      />
    </svg>
  ),
};

export const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const services = [
    {
      title: "AI Apps & Integration",
      animationPath: "AlogoForiday",
      subtitle: "AI Agent & Automation Engine",
      description: "Build chat, voice & workflow bots for business",
      icon: ServiceIcons.integration,
      gradient: "from-blue-50 to-purple-50", // Kept for icon background
    },
    {
      title: "AI & Machine Learning",
      animationPath: "/assets/lottie/AlogoForiday.json",
      subtitle: "Custom AI Agents & Automation",
      description:
        "Custom AI agents and automation systems that turn business data into real-time decisions, support, and operational efficiency.",
      icon: ServiceIcons.ml,
      gradient: "from-purple-50 to-pink-50",
    },
    {
      title: "Data Mining & Management",
      animationPath: "/assets/lottie/AlogoForiday.json",
      subtitle: "Automated Data Systems",
      description:
        "Automated data extraction and organization systems that collect, clean, and structure information for instant business insights.",
      icon: ServiceIcons.data,
      gradient: "from-pink-50 to-orange-50",
    },
  ];

  const features = [
    {
      title: "Customer‑Facing AI",
      subtitle: "Drive engagement on autopilot",
      icon: <Users className="w-14 h-14 text-white" />,
      gradient: "from-blue-500 to-cyan-600",
      points: [
        "Lead capture, engagement, and conversion",
        "Automated support across chat, email, and voice",
        "Direct‑mail and outreach that follows through",
      ],
    },
    {
      title: "Internal Operations AI",
      subtitle: "Streamline your backend workflows",
      icon: <Workflow className="w-14 h-14 text-white" />, // Or <Cpu />
      gradient: "from-emerald-500 to-green-600",
      points: [
        "Data entry and record updates synced across tools",
        "Research and info gathering done on command",
        "Scheduling, reminders, and admin task handling",
      ],
    },
    {
      title: "Decision & Intelligence AI",
      subtitle: "Turn raw data into strategy",
      icon: <BrainCircuit className="w-14 h-14 text-white" />,
      gradient: "from-violet-500 to-purple-600",
      points: [
        "Instant insights from calls, messages, and data",
        "Analytics that trigger action — not just dashboards",
      ],
    },
    {
      title: "Custom Platforms",
      subtitle: "Tailored solutions for unique needs",
      icon: <Layers className="w-14 h-14 text-white" />,
      gradient: "from-amber-500 to-orange-600",
      points: [
        "SaaS products and operational apps built for scale",
      ],
    },
  ];

  const industries = [
    { name: "Customer Support", icon: IndustryIcons.support },
    { name: "Lead Onboarding", icon: IndustryIcons.onboarding },
    { name: "Sales Operations", icon: IndustryIcons.sales },
    { name: "Data Entry", icon: IndustryIcons.dataEntry },
    { name: "Content Moderation", icon: IndustryIcons.moderation },
    { name: "Appointment Scheduling", icon: IndustryIcons.scheduling },
  ];

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-[#d2dcff] to-[#ffffff] py-24 overflow-x-clip relative"
    >
      <div className="container">
        <div className="section-heading mb-16">
          <div className="flex justify-center">
            <div className="tag">What We Build</div>
          </div>
          <h2 className="section-title mt-5">
            AI That Works Like Part of Your Team
          </h2>
          <p className="section-subtitle mt-5">
            Smart systems that understand context, take action, and move your
            business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={feature.title} className="col-span-1 flex justify-center">
              <motion.div
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
        card bg-white py-4 px-6 transition-all duration-300 border border-[#f1f1f1] my-2 group rounded-xl
       
       min-w-[450px]`}
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 mb-6 h-48 flex items-center justify-center  group-hover:scale-105 transition duration-200`}
                >
                  {/* The Shine Effect Overlay */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12" />
                  <div className="transform group-hover:animate-bounce">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-md text-gray-700 mb-1 font-medium">
                  {feature.subtitle}
                </p>
                <ul className="space-y-2">
                  {feature.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm leading-relaxed text-gray-700"
                    >
                      <span className="mr-2 text-green-500">
                        • {/* Or use a check icon here */}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-white hover:shadow-[0px_14px_28px_#EAEAEA] p-4 transition-shadow duration-300 border min-w-80 border-[#f1f1f1]"
            >
              <div
                className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-6 mb-6 h-48 flex items-center justify-center`}
              >
                <div className="transform scale-150">{service.icon}</div>
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
        </div> */}

       
        <motion.img
          src={"/assets/pyramid.png"}
          style={{ translateY }}
          height={262}
          width={262}
          alt="pyramid"
          className="hidden md:block absolute left-56 top-20 pointer-events-none z-10"
        />
        <motion.img
          src={"/assets/cylinder.png"}
          style={{ translateY }}
          height={248}
          width={248}
          alt="tube"
          className="hidden md:block absolute right-14 bottom-0 rotate-45 pointer-events-none z-10"
        />
      </div>
    </section>
  );
};
