import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <div className="md:hidden absolute z-10 text-[#d17777] bg-[#222039] rounded-3xl p-3 top-4 left-1/2 -translate-x-1/2 w-[80%] text-center font-quicksand">
        Use Two Finger To Drag
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#ff98a2] text-sm">Scroll Down</span>
        <span className="text-[#ff98a2] text-2xl animate-bounce">↓</span>
      </div>
    </div>
  );
}