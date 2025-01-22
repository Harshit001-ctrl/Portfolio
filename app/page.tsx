"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LoadingScreen = dynamic(() => import("../components/LoadingScreen"), { ssr: false });
const MainLayout = dynamic(() => import("../components/MainLayout"), { ssr: false });

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsHydrated(true);
    }
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans antialiased">
      <LoadingScreen />
      <MainLayout />
    </main>
  );
}
