/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      "chivoMono": ["Chivo Mono", "Arial", "Helvetica", "sans-serif"],
      "righteous": ["Righteous", "Arial", "Helvetica", "sans-serif"],
      "martianMono": ["Martian Mono", "Arial", "Helvetica", "sans-serif"]
    }
  },
  plugins: [],
}