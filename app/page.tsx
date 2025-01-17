"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import client-side components to avoid SSR issues
const LoadingScreen = dynamic(() => import("../components/LoadingScreen"), { ssr: false });
const MainLayout = dynamic(() => import("../components/MainLayout"), { ssr: false });

export default function Home() {
  // State to track window width
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // Check if running on the client side
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Set initial window width
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans antialiased">
      {/* Debugging: Display window width */}
      {windowWidth !== null && <p>Window Width: {windowWidth}px</p>}

      {/* Render client-side components */}
      <LoadingScreen />
      <MainLayout />
    </main>
  );
}
