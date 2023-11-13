/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        "summary-label": "hsl(189, 41%, 97%)",
        "summary-perLabel": "hsl(186, 14%, 43%)",
        "summary-total": "hsl(172, 67%, 50%)",
      },
    },
  },
  plugins: [],
};
