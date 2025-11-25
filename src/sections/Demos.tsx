'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import DemoInput from '@/components/DemoInput';
import AgentWidget from '@/components/AgentWidget';

export const Demos = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const [activeTab, setActiveTab] = useState<'email' | 'voice' | 'ai'>('email');

  const tabs = [
    { id: 'email' as const, label: 'Get a Demo', icon: '📧' },
    { id: 'voice' as const, label: 'Talk to a Voice Agent', icon: '🎤' },
    { id: 'ai' as const, label: 'Talk to our AI', icon: '💬' },
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
            Experience our AI solutions firsthand. Choose how you&apos;d like to interact.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-2 shadow-md border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-black text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative flex justify-center min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'email' && (
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
                    Request a Demo
                  </h3>
                  <p className="text-gray-600">
                    Share your email and let our AI sales agent reach out immediately
                  </p>
                </div>
                <DemoInput />
              </motion.div>
            )}

            {activeTab === 'voice' && (
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
                    Talk to a Voice Agent
                  </h3>
                  <p className="text-gray-600">
                    Have a real-time conversation with our AI voice agent
                  </p>
                </div>
                <div className="flex justify-center">
                  <AgentWidget />
                </div>
              </motion.div>
            )}

            {activeTab === 'ai' && (
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
                    AI Chat Coming Soon
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Our AI chat interface is currently under development.
                    In the meantime, try our voice agent or request a demo!
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => setActiveTab('voice')}
                      className="btn btn-primary"
                    >
                      Try Voice Agent
                    </button>
                    <button
                      onClick={() => setActiveTab('email')}
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
          src={'/assets/pyramid.png'}
          style={{ translateY }}
          height={262}
          width={262}
          alt="pyramid"
          className="hidden md:block absolute -right-36 -top-32 pointer-events-none"
        />
        <motion.img
          src={'/assets/tube.png'}
          style={{ translateY }}
          height={248}
          width={248}
          alt="tube"
          className="hidden md:block absolute -left-36 bottom-24 pointer-events-none"
        />
      </div>
    </section>
  );
};

