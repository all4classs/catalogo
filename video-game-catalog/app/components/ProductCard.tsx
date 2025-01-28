'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProductCard({ product, view }) {
  return (
    <motion.div
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-neon-purple transition-shadow duration-300 ${
        view === 'grid' ? 'flex flex-col' : 'flex flex-row'
      }`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`relative ${view === 'grid' ? 'h-48' : 'h-full w-1/3'}`}>
        <Image
          src={`/placeholder-${product.id}.jpg`}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`p-4 ${view === 'grid' ? '' : 'w-2/3'}`}>
        <h3 className="text-xl font-semibold mb-2 text-neon-blue">{product.name}</h3>
        <p className="text-gray-300 mb-4">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          {product.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-neon-purple text-white text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

