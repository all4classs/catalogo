/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': 'var(--neon-blue)',
        'neon-purple': 'var(--neon-purple)',
        'neon-green': 'var(--neon-green)',
      },
    },
  },
  plugins: [],
}

