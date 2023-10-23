/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "text-light": "#0d051a",
        "bg-light": "#F3F2F3",
        "primary-light": "#321268",
        "secondary-light": "#e7dcf9",
        "accent-light": "#6128bd",
        //
        "text-dark": "#ede5fa",
        "bg-dark": "#130727",
        "primary-dark": "#b697ed",
        "secondary-dark": "#110623",
        "accent-dark": "#07e9ce",
      },
    },
    fontFamily: {
      signature: ["Great Vibes", "sans-serif"],
      terminal: ["Source Code Pro", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
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
