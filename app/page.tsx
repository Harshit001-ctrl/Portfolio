'use client'

import LoadingScreen from '../components/LoadingScreen'
import MainLayout from '../components/MainLayout'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans antialiased">
      <LoadingScreen />
      <MainLayout />
      
    </main>
  )
}

