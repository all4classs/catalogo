'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SearchBar({ setSearchTerm }) {
  const [localSearchTerm, setLocalSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(localSearchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-1/2 mb-4 md:mb-0">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-neon-purple text-white rounded-full hover:bg-neon-blue transition duration-300"
        >
          Search
        </button>
      </motion.div>
    </form>
  )
}

