module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Condensed", "Arial Narrow", "Arial", "sans-serif"],
        label: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "sans-serif",
        ],
      },
      colors: {
        text: "#2c3e50",
        "smoke-100": "#f1f4f2",
        "smoke-200": "#e7ebe9",
        "smoke-300": "#dfe5e2",
        "smoke-500": "#b5c0bd",
        qblue: "rgb(70, 150, 200)",
        tagyellow: "rgb(255, 180, 0)",
      },
      screens: {
        low: { raw: "(max-height: 1000px)" },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
