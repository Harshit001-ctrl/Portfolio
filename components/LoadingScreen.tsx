'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

export default function LoadingScreen() {
  useEffect(() => {
    const tl = gsap.timeline();

    // Animation sequence
    tl.to(".loading-text", {
      opacity: 1,
      scale: 1.2,
      duration: 1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
    })
      .to(".loading-text", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(".loading-number", {
        opacity: 1,
        y: 0,
        scale: 1.1,
        duration: 0.3,
        stagger: {
          each: 0.1,
          from: "start",
        },
      })
      .to(".loading-container", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          window.dispatchEvent(new Event('loadingComplete'));
        },
      })
      .set(".loading-container", { display: "none" });
  }, []);

  const numbers = [1, 2, 5, 10, 20, 28, 35, 45, 55, 65, 70, 80, 90, 96, 100];

  return (
    <div className="loading-container fixed inset-0 z-50 bg-gradient-to-b from-gray-800 to-black flex flex-col items-center justify-center">
      {/* Loading text */}
      <div className="loading-text text-white text-5xl md:text-6xl lg:text-7xl font-extrabold opacity-0 transform scale-0">
        LOADING
      </div>

      {/* Numbers */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8 sm:gap-6 md:gap-8 lg:gap-10">
        {numbers.map((num) => (
          <div
            key={num}
            className="loading-number text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white opacity-0 transform translate-y-10"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}
