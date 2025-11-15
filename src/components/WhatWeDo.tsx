"use client";
import Lottie from "lottie-react";
import Integration from "@/assets/lottie/Integration.json";
import Tools from "@/assets/lottie/Tools.json";
import scale from "@/assets/lottie/scale.json";
function WhatWeDo() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      {/* Three Feature Rows */}
      <div className="space-y-16">
        {/* Row 1: Understand context */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="tag">
              Autonomous Actions
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Understand context
            </h3>
            <p className="text-lg text-gray-600">
              Our AI agents analyze and comprehend complex scenarios, making
              intelligent decisions based on contextual understanding of your
              business needs.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12">
            <Lottie animationData={Integration} loop={true} />
          </div>
        </div>

        {/* Row 2: Take action in your tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image/Lottie first on desktop, text second */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12">
            <Lottie animationData={Tools} loop={true} />
          </div>
          <div className="space-y-4">
            <div className="tag">
              Deep Integrations
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Take action in your tools
            </h3>
            <p className="text-lg text-gray-600">
              Seamlessly integrate with your existing tech stack and execute
              actions directly in the tools your team already uses.
            </p>
          </div>
        </div>

        {/* Row 3: Operate 24/7 without supervision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="tag">
              Scalable Workforce
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Operate 24/7 without supervision
            </h3>
            <p className="text-lg text-gray-600">
              Your AI workforce never sleeps. Continuously monitor, respond, and
              execute tasks around the clock, scaling effortlessly with your
              business demands.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-12 min-h-[300px] flex items-center justify-center">
            <Lottie animationData={scale} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
