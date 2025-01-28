'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'
import Filters from './Filters'
import ToggleView from './ToggleView'

const products = [
  { id: 1, name: 'Quantum Blaster', description: 'Next-gen energy weapon', category: 'Weapons', tags: ['New'] },
  { id: 2, name: 'Nano Armor', description: 'Self-repairing exosuit', category: 'Armor', tags: ['Exclusive'] },
  { id: 3, name: 'Holo Shield', description: 'Portable force field generator', category: 'Armor', tags: [] },
  { id: 4, name: 'Medi-Gel', description: 'Instant wound healing', category: 'Consumables', tags: ['Popular'] },
  // Add more products as needed
]

export default function Catalog() {
  const [view, setView] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || product.category === selectedCategory)
  )

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8 flex flex-wrap items-center justify-between">
        <SearchBar setSearchTerm={setSearchTerm} />
        <Filters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <ToggleView view={view} setView={setView} />
      </div>
      <motion.div 
        className={`grid gap-8 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} view={view} />
        ))}
      </motion.div>
    </section>
  )
}

