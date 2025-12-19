/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-orange-color": "#FF5722",
        "main-blue-color": "#4F617D",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
