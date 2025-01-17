import { useEffect, useRef } from 'react';

export default function ScrollProgressBar() {
  const filledRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      if (filledRef.current) {
        const windowScroll = window.scrollY;
        const height = document.body.scrollHeight - window.innerHeight;
        const scrolled = (windowScroll / height) * 100;
        filledRef.current.style.width = `${scrolled}%`;
      }
      requestAnimationFrame(updateProgress);
    };

    requestAnimationFrame(updateProgress);
  }, []);

  return (
    <div className="fixed w-full h-[0.6vh] z-[1000]">
      <div ref={filledRef} className="h-full bg-[#ff98a2]" />
    </div>
  );
}