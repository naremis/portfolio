/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-nav": "cubic-bezier(0.78,0.14,0.15,0.86)",
      },
      transitionProperty: {
        width: "width",
      },

      boxShadow: {
        leftShadow: "-2px 0 8px rgb(0 0 0 / 15%)",
      },
    },
  },
  plugins: [],
};
