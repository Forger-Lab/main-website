'use client'
import { useState } from 'react'
import Image from 'next/image'
import { baumans } from '@/app/fonts'

export const SolvoLabLogo = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleLogoHover = () => {
    if (!isSpinning) {
      setIsSpinning(true);
    }
  };

  const handleAnimationEnd = () => {
    setIsSpinning(false);
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
                className={`object-contain ${isSpinning ? 'logo-image-spinning' : ''}`}
                onAnimationEnd={handleAnimationEnd}
              />
              <span className={`text-2xl font-bold ${baumans.className}`}>
                SolvoLab.
              </span>
            </div>
  )
}

export default SolvoLabLogo