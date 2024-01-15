/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        28: "7rem", // 这会创建 min-h-28
      },
      minWidth: {
        28: "7rem", // 这会创建 min-w-28
      },
      height: {
        120: "30rem",
        150: "40rem",
        200: "50rem", // 添加 h-200 类，等于 200px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        // sm: "500px",
        // md: "700px",
        // lg: "1300px",
        // xl: "1800px",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
