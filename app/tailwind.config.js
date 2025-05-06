
export default {
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", 
        secondary: "#E11D48",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/bg.jpg')",
      },
    },
  },
  plugins: [heroui()],
};
