'use client'

import { motion } from 'framer-motion'

const categories = ['All', 'Weapons', 'Armor', 'Consumables']

export default function Filters({ selectedCategory, setSelectedCategory }) {
  return (
    <motion.div
      className="flex flex-wrap gap-2 mb-4 md:mb-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === category
              ? 'bg-neon-purple text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          } transition duration-300`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  )
}

