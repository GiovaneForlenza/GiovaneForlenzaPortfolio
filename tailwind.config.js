/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "text-light": "#0d051a",
        "text-dark": "#ede5fa",
        "bg-light": "#F3F2F3",
        "bg-dark": "#130727",
        "primary-light": "#321268",
        "primary-dark": "#b697ed",
        "secondary-light": "#e7dcf9",
        "secondary-dark": "#110623",
        "accent-light": "#6128bd",
        "accent-dark": "#07e9ce",
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
