"use client";
import { useState } from "react";
import Image from "next/image";
import { baumans } from "@/app/fonts";
import { useRouter } from "next/navigation"; // Changed from next/router

export const SolvoLabLogo = () => {
  const router = useRouter(); // Renamed from 'route' to 'router'
  const [isSpinning, setIsSpinning] = useState(false);

  const handleLogoHover = () => {
    if (!isSpinning) {
      setIsSpinning(true);
    }
  };

  const handleAnimationEnd = () => {
    setIsSpinning(false);
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div
      className="rounded-full bg-[#cbddf3] px-4 py-2 flex items-center justify-center gap-2"
      onMouseEnter={handleLogoHover}
    >
      <Image
        src={"/assets/SolvoLabLogo_cropped.svg"}
        alt="Logo"
        width={36}
        height={36}
        className={`object-contain ${isSpinning ? "logo-image-spinning hover:cursor-pointer" : ""}`}
        onClick={handleLogoClick} // Changed to use the handler function
        onAnimationEnd={handleAnimationEnd}
      />
      <span className={`text-2xl font-bold ${baumans.className}`}>
        SolvoLab.
      </span>
    </div>
  );
};