/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom primary color
        secondary: "#E11D48", // Custom secondary color
      },
      backgroundImage: {
        "hero-pattern": "url('/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
