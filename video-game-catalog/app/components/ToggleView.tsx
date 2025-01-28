'use client'

import { motion } from 'framer-motion'
import { Grid, List } from 'lucide-react'

export default function ToggleView({ view, setView }) {
  return (
    <motion.div
      className="flex gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <button
        onClick={() => setView('grid')}
        className={`p-2 rounded ${
          view === 'grid' ? 'bg-neon-purple' : 'bg-gray-800 hover:bg-gray-700'
        } transition duration-300`}
      >
        <Grid className="w-6 h-6" />
      </button>
      <button
        onClick={() => setView('list')}
        className={`p-2 rounded ${
          view === 'list' ? 'bg-neon-purple' : 'bg-gray-800 hover:bg-gray-700'
        } transition duration-300`}
      >
        <List className="w-6 h-6" />
      </button>
    </motion.div>
  )
}

