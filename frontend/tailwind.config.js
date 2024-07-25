/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins-reg": ["poppins-reg", "sans-serif"],
        "poppins-bold": ["poppins-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
