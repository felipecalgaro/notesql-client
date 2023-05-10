/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        custom: "4px",
      },
      borderWidth: {
        custom: "1px",
      },
    },
  },
  plugins: [],
};
