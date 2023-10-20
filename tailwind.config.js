/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: "#ede5fa",
        "bg-dark": "#130727",
        primary: "#b697ed",
        secondary: "#110623",
        accent: "#07e9ce",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      code: ["Inconsolata"],
    },

    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
