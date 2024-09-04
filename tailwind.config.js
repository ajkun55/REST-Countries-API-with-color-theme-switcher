/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "Dark-Mode-Elements": "hsl(209, 23%, 22%)",
      "Dark-Mode-Background": "hsl(207, 26%, 17%)",
      "Light-Mode-Text": "hsl(200, 15%, 8%)",
      "Light-Mode-Input": "hsl(0, 0%, 52%)",
      "Light-Mode-Background": "hsl(0, 0%, 98%)",
      White: "hsl(0, 0%, 100%)",
    },
    extend: {
      backgroundImage: {},
      backgroundSize: {},
      boxShadow: {
        around: "0 0 8px 2px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
