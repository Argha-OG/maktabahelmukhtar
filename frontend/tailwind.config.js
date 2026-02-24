/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0047AB", // Deep Blue
          light: "#E3F2FD",
          dark: "#002D62",
        },
        glass: {
          white: "rgba(255, 255, 255, 0.1)",
          border: "rgba(255, 255, 255, 0.2)",
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
