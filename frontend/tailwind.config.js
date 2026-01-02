/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Slate 900 (Dark Background)
        secondary: "#1e293b", // Slate 800 (Card Background)
        accent: "#38bdf8", // Sky 400 (Buttons/Highlights)
        textMain: "#f8fafc", // Slate 50 (Headings)
        textSub: "#94a3b8", // Slate 400 (Body text)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}