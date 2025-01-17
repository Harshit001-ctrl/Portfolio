"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "../components/MainLayout";

export default function Home() {
  // Example of client-side logic
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // Ensure this logic runs only in the browser
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Set initial window width
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans antialiased">
      {/* Debugging: Log window width */}
      {windowWidth !== null && <p>Window Width: {windowWidth}px</p>}

      <LoadingScreen />
      <MainLayout />
    </main>
  );
}
