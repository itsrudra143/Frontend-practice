/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "myriad-pro": ["Myriad Pro", "sans-serif"],
        gotham: ["Gotham", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      letterSpacing: {
        "hero-spacing": ["-0.5rem"],
      },
      screens: {
        sm: { min: "320px", max: "639px" },
        md: { min: "640px", max: "1023px" },
        lg: { min: "1024px", max: "1220px" },
        xl: { min: "1221px" },
      },
    },
  },
  plugins: [],
};
