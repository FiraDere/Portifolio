/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <-- this is CRUCIAL
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // make sure it scans your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
