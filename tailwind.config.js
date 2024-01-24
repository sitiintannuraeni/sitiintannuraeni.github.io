const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        body: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
    extend: {},
  },
  plugins: [],
});
