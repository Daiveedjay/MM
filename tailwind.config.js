/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      appWhite: "var(--white)",
      VeryLightGrayishBlue: "var(--very-light-grayish-blue)",
      LightGrayishBlue1: "var(--light-grayish-blue-1)",
      LightGrayishBlue2: "var(--light-grayish-blue-2)",
      LightGrayishBlue3: "var(--light-grayish-blue-3)",
      GrayishBlue: "var(--grayish-blue)",
      DarkGrayishBlue: "var(--dark-grayish-blue)",
      VeryDarkBlue: "var(--very-dark-blue)",
      textGray: "var(--text-gray)",
      textColor: "var(--text-color)",
      appRed: "var(--red)",
      appBlue: "var(--blue)",
    },
  },
  plugins: [],
};
