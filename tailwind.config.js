/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.6rem", // 你的自定义字体大小
      },
      lineHeight: {
        xxs: "0.75", // 为xxs字体大小定义的自定义line-height
      },
      minHeight: {
        6: "1.5rem",
        10: "2.5rem",
        16: "4rem",
        20: "5rem",
        20: "6rem",
        28: "7rem",
      },
      minWidth: {
        6: "1.5rem",
        10: "2.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
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
        xs: "10px",
        sm: "500px",
        md: "1000px",
        lg: "1500px",
        xl: "2000px",
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
