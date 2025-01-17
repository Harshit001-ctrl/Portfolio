"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    gsap.to(".about-container", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="about-container opacity-0 transform translate-y-10 min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 bg-black/80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#d17777] to-[#ff98a2] rounded-[50px] blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harshit%20photo.png-UotKfyLWDtes9h33w9VRNVqoV32Wlj.jpeg"
            alt="Professional headshot"
            className="relative rounded-[50px] w-full md:w-[80%] lg:w-[70%] mx-auto transform transition duration-500 hover:scale-105"
          />
        </div>

        <div className="space-y-8 backdrop-blur-sm bg-black/30 p-8 rounded-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d17777] font-quicksand">
            ABOUT ME
          </h1>

          <div className="text-white text-lg leading-relaxed space-y-4">
            <p>
              Recent graduate with a passion for Full Stack Development, eager
              to contribute skills in modern technologies to innovative
              projects. Strong problem-solving abilities and a collaboration
              mindset to learn and adapt to new technologies.
            </p>
            <p>
              Recently working as a Full Stack Developer at Zillion Softech,
              where I've successfully contributed to multiple projects and
              gained valuable real-world experience.
            </p>
          </div>

          <div className="space-y-4 md:space-y-0 md:flex md:gap-8">
            <div>
              <span className="text-[#ff98a2]">Location: </span>
              <span className="text-white">Rewari, Haryana IN</span>
            </div>
            <div>
              <span className="text-[#ff98a2]">Phone: </span>
              <span className="text-white">9518125798</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/Harshit%20Cv.pdf"
              download="Harshit_Cv.pdf"
              className="inline-block px-8 py-3 bg-[#d17777] text-white rounded-full hover:bg-[#ff98a2] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-[#d17777] text-white rounded-full hover:bg-[#d17777] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
