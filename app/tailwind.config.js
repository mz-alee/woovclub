const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
  content: [
    "./node_modules/@heroui/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js"
],
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
  plugins: [heroui()],
};
