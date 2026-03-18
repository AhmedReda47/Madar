/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "var(--color-primary)",
        "primary-2": "var(--color-primary-2)",
        white: "var(--color-white)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "white-5": "var(--color-white-5)",
        "white-30": "var(--color-white-30)",
        "white-10": "var(--color-white-10)",
        "text-secondary-gray": "var(--color-text-secondary-gray)",
        "text-secondary-gray-2": "var(--color-text-secondary-gray-2)",
        "text-secondary-gray-3": "var(--color-text-secondary-gray-3)",
        "text-secondary-gray-4": "var(--color-text-secondary-gray-4)",
        "black-gradient": "var(--color-black-gradient)",
        "black-gradient-2": "var(--color-black-gradient-2)",
        "black-gradient-3": "var(--color-black-gradient-3)",
        "black-gradient-4": "var(--color-black-gradient-4)",
        "blue-gradient": "var(--color-blue-gradient)",
        "blue-gradient-2": "var(--color-blue-gradient-2)",
        "white-33": "var(--color-white-33)",
        "white-14": "var(--color-white-14)",
        "white-d7": "var(--color-white-d7)",
        "primary-dark": "var(--color-primary-dark)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

