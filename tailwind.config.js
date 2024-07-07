
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Alexandria', 'sans-serif'],
      },
      colors: {
        'DarkGreen': '#202a27',
        'DarkTan': '#977e52',
        'Sand':  '#c9b991;',
      },
    },
  },
  plugins: [
    // Example plugin setup if needed
  ],
};
