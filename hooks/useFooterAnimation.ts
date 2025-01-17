import { useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useFooterAnimation() {
  const initializeFooterAnimation = useCallback(() => {
    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: "footer", // Target the footer element
        start: "top 80%", // Animation starts when the footer enters the viewport
        end: "top 60%", // Animation ends as the footer scrolls further into view
        scrub: 1, // Smooth animation tied to scroll position
      },
    });

    footerTl
      .to(".name-footer", {
        y: 0,
        opacity: 1,
        duration: 0.5,
      })
      .to([".address", ".quicklink"], {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
      });
  }, []);

  return { initializeFooterAnimation };
}
