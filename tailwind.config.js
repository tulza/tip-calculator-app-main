/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {},
    color: {
      background: "hsl(185, 41%, 84%)",
      "Input-field": "hsl(189, 41%, 97%)",
      "base-calc-bg": "hsl(0, 0%, 100%)",

      "summary-box": "hsl(183, 100%, 15%)",
      "tip-button": "hsl(183, 100%, 15%)",
      "reset-button": "hsl(172, 67%, 45%)",
      "Dark-grayish-cyan": "hsl(186, 14%, 43%)",
      "Grayish-cyan": "hsl(184, 14%, 56%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
