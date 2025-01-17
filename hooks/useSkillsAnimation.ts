import { useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSkillsAnimation() {
  const initializeAnimations = useCallback(() => {
    // Title animation
    gsap.to(".myskills", {
      y: -80,
      opacity: 1,
      scrollTrigger: {
        trigger: ".myskills",
        start: "top 90%", // Trigger animation when .myskills enters the viewport
        end: "top 70%", // End animation slightly later for smoothness
        scrub: true, // Smooth animation linked to scrolling
      },
    });

    // Skills animations with toggle and delay
    const skillElements = gsap.utils.toArray('[id^="skill-"]');
    skillElements.forEach((element, index) => {
      gsap.to(element, {
        opacity: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: element, // Use each skill element as the trigger
          start: "top 90%", // Trigger animation when skill enters viewport
          end: "top 70%", // End animation slightly later
          scrub: true, // Smooth animation linked to scrolling
        },
      });
    });
  }, []);

  return { initializeAnimations };
}
