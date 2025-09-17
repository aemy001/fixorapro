/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', 
  theme: {
    extend: {
      // colors: {
      //   background: 'var(--color-background)',
      //   foreground: 'var(--color-foreground)',

      //   primary: 'var(--color-primary)',
      //   accent: 'var(--color-accent)',
      //   success: 'var(--color-success)',
      //   danger: 'var(--color-danger)',

      //   border: 'var(--color-border)',
      //   muted: 'var(--color-muted)',
      // },
      //  fontFamily: {
      //   sans: ['var(--font-sans)'],
      //     heading: ['var(--font-heading)', 'sans-serif'],
      // },
    },
  },
  plugins: [],
}
