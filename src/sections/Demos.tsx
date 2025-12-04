"use client";
import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import DemoInput from "@/components/DemoInput";
import AgentWidget from "@/components/AgentWidget";
import { DynamicIcon } from 'lucide-react/dynamic';

export const Demos = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const [activeTab, setActiveTab] = useState<"email" | "voice" | "ai">("voice");

  const tabs = [
    { id: "email" as const, label: "Email Zyra", icon: "at-sign" },
    { id: "voice" as const, label: "Call Zyra", icon: "audio-lines" },
    { id: "ai" as const, label: "Chat with Zyra", icon: "message-square-more" },
  ];

  return (
    <section
      ref={ref}
      id="DemoSection"
      className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip lg:min-h-[700px] relative"
    >
      <div className="container">
        <div className="section-heading mb-10">
          <div className="flex justify-center">
            <div className="tag">Try It Now</div>
          </div>
          <h2 className="section-title mt-5">See the AI Workforce in Action</h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tighter text-[#010d3e] mt-5">
            Experience our AI solutions firsthand. Choose how you&apos;d like to
            interact.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex py-3 px-6 rounded-full bg-[#c5aaf1]/40 backdrop-blur-xl shadow-lg"
          >
            {tabs.map((tab) => (
              <>
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                  ? "bg-[black] text-white border border-black font-bold"
                  : "text-black font-medium hover:text-gray-900 hover:scale-105 "
                }`}
              >
                {/* <span className="mr-2">{tab.icon}</span> */}
                {tab.label}
                <DynamicIcon 
                  name={tab.icon as any} 
                  color={activeTab === tab.id ? "white" : "black"} 
                  size={activeTab === tab.id ? 30 : 20}
                />
              </button>
              </>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative flex justify-center md:min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === "email" && (
              <motion.div
                key="email"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Chat with Zyra, Our Sales Agent
                  </h3>
                  <p className="text-gray-600">
                    Share your email and let our Zyra will reach out
                    immediately
                  </p>
                </div>
                <DemoInput />
              </motion.div>
            )}

            {activeTab === "voice" && (
              <motion.div
                key="voice"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Talk to a Deen
                  </h3>
                  <p className="text-gray-600">
                    Questions? Deen will answer them all
                  </p>
                </div>
                <div className="flex justify-center">
                  <AgentWidget />
                </div>
              </motion.div>
            )}

            {activeTab === "ai" && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl text-center"
              >
                <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Zyra
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                  Zyra’s taking a quick power nap — we’ll wake him up soon.!
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => setActiveTab("voice")}
                      className="btn btn-primary"
                    >
                      Try Voice Agent
                    </button>
                    <button
                      onClick={() => setActiveTab("email")}
                      className="btn btn-text"
                    >
                      Request Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative Elements */}
        <motion.img
          src={"/assets/pyramid.png"}
          style={{ translateY }}
          height={262}
          width={262}
          alt="pyramid"
          className="hidden md:block absolute right-56 top-40 pointer-events-none z-10"
        />
        <motion.img
          src={"/assets/tube.png"}
          style={{ translateY }}
          height={248}
          width={248}
          alt="tube"
          className="hidden md:block absolute left-56 bottom-24 pointer-events-none z-10"
        />
      </div>
    </section>
  );
};
