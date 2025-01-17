'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  useEffect(() => {
    gsap.to(".experience-container", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".experience-container",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    })
  }, [])

  return (
    <section className="experience-container opacity-0 transform translate-y-10 min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 bg-black/80">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-[#d17777] font-quicksand mb-12 text-center">
          EXPERIENCE & ACHIEVEMENTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="backdrop-blur-sm bg-black/30 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-[#ff98a2] mb-4">Work Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-white font-semibold">Full Stack Developer</h4>
                <p className="text-[#d17777]">Zillion Softech | 05/2023 – 06/2024</p>
                <ul className="list-disc list-inside text-white mt-2 space-y-2">
                  <li>Managed various project tasks including team coordination and deadline tracking</li>
                  <li>Developed and maintained user-centric web applications</li>
                  <li>Successfully deployed five key projects within deadlines</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-black/30 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-[#ff98a2] mb-4">Achievements</h3>
            <ul className="list-disc list-inside text-white space-y-4">
              <li>Knight Badge on LeetCode - solved 1000+ coding problems</li>
              <li>Contest rating of 1120 (top 9% coders)</li>
              <li>Secured contest rank of 570 on LeetCode weekly contest 380</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#ff98a2] mt-8 mb-4">Education</h3>
            <div className="text-white">
              <h4 className="font-semibold">B. Tech (CSE) - 6.7 GPA</h4>
              <p>Maharshi Dayanand University</p>
              <p className="text-[#d17777]">06/2020 – 07/2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

