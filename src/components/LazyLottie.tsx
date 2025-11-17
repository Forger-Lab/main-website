"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie to reduce initial bundle
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center min-h-[470px] animate-pulse">
      <div className="animate-pulse w-full h-full bg-white/50 rounded-xl backdrop-blur-sm" />
    </div>
  ),
});

interface LazyLottieProps {
  animationPath: string;
  loop?: boolean;
  className?: string;
}

export default function LazyLottie({ 
  animationPath, 
  loop = true, 
  className = "" 
}: LazyLottieProps) {
  const [animationData, setAnimationData] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Stop observing once loaded
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Load animation data only when in view
  useEffect(() => {
    if (isInView && !animationData) {
      import(`@/assets/lottie/${animationPath}.json`)
        .then((data) => {
          setAnimationData(data.default);
          // Wait 1 second before showing the animation
          setTimeout(() => {
            setShowAnimation(true);
          }, 1000);
        })
        .catch((error) => {
          console.error("Failed to load animation:", error);
        });
    }
  }, [isInView, animationPath, animationData]);

  return (
    <div ref={containerRef} className={className}>
      {showAnimation ? (
        <div className="animate-fade-in">
          <Lottie animationData={animationData} loop={loop} />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center min-h-[250px]">
          <div className="animate-pulse w-full h-full bg-white/50 rounded-xl backdrop-blur-sm" />
        </div>
      )}
    </div>
  );
}

