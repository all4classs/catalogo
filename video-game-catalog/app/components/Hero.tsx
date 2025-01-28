'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-50"></div>
      <div className="absolute inset-0">
        {/* Add a starfield background here */}
        <div className="absolute inset-0 bg-[url('/stars.png')] animate-twinkle"></div>
      </div>
      <div className="z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl font-bold mb-4 text-neon-blue"
        >
          Galactic Gear
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-2xl mb-8"
        >
          Your Portal to Futuristic Gaming Equipment
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="px-6 py-3 bg-neon-purple text-white rounded-full hover:bg-neon-blue transition duration-300 ease-in-out transform hover:scale-105"
        >
          Explore Catalog
        </motion.button>
      </div>
      {!isLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <p className="text-2xl text-neon-green animate-pulse">Loading Inventory...</p>
        </div>
      )}
    </section>
  )
}

