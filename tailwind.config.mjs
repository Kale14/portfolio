export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'right': '10px 0 20px rgba(0, 0, 0, 0.2)', // Schatten rechts
        'left': '-10px 0 20px rgba(255, 255, 255, 0.5)',  // Schatten links
        'top': '0 -10px 20px rgba(255, 255, 255, 0.5)',   // Schatten oben
        'bottom': '0 10px 20px rgba(255, 255, 255, 0.5)', // Schatten unten
      },
    },
  },
  plugins: [],
};
