import Hero from './components/Hero'
import Catalog from './components/Catalog'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Catalog />
    </main>
  )
}

