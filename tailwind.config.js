module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red: "#f1523f",
      black: "#182d30",
      white: "#ffffff",
      yellow: "#facc15",
      green: "#22c55e",
    },
    extend: {
      spacing: {
        33.5: "8.46rem",
      },
    },
  },
  plugins: [],
}
