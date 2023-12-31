/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        inherit: "inherit",
        page_elem_bg: "#2C1A4A",
        background: "#37195E",
        color: "#fff",
        hover: "#A175FF",
        main_purple: "#62469e",
        second_purple: "#906ae2",
        second: "#705CA5",
        active: "#A175FF",
        black: "#000",
        ashBlack: "#222",
        white: "#fafafa",
        sky: "#00ccff",
        green: "#22dddd",
        blue: "#1300ff",
        dusk: "#6600ff",
        purple: "#9900ff",
        pink: "#ff0066",
        red: "#fe0222",
        orange: "#fd7702",
        yellow: "#ffbb00",
      },
      fontFamily: {
        damione: "var(--damione-font)",
        blender: "var(--blender-font)",
        title: "var(--damione-font)",
        paragraph: "var(--blender-font)",
      },
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra-large screens
        "1120px": "1120px", // Показываем header
        gl: "1920px",
      },
    },
  },
  plugins: [],
};
