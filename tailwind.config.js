/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        md: "900px",
      },
      colors: {
        "light-primary": "#D6A72F",
        "dark-primary": "#907122",
        "light-secondary": "#D700FF",
        "dark-secondary": "#9807B4",
        "gray-custom": "#717171",
        "dark-gray-custom": "#2C2C2C",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        "antic-didone": ["Antic Didone", "serif"],
      },
      boxShadow: {
        custom: "0 2px 15px",
      },
      borderRadius: {
        custom: "6px",
      },
      borderWidth: {
        custom: "2px",
      },
    },
  },
  plugins: [],
};
