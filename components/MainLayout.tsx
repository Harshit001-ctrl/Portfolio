'use client'

import { useEffect, useState } from 'react'
import ScrollProgressBar from './ScrollProgressBar'
import About from './About'
import Experience from './Experience'
import Footer from './Footer'
import SplineBackground from './SplineBackground'
import Hero from './Hero'
import Skills from './Skills'
import '../app/globals.css';
export default function MainLayout() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleLoadComplete = () => {
      setIsVisible(true)
    }
    
    window.addEventListener('loadingComplete', handleLoadComplete)
    return () => window.removeEventListener('loadingComplete', handleLoadComplete)
  }, [])

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <ScrollProgressBar />
      <SplineBackground />
      <Hero />
      <div className="relative z-10">
        <About />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </div>
  )
}

