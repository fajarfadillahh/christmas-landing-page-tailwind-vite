module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,sass}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1024px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#282525",
      grey: {
        500: "#5d5656",
        600: "#918888",
      },
      red: {
        500: "#dc3845",
        600: "#d42b39",
      },
    },
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      medium: 500,
      semibold: 600,
    },
    lineHeight: {
      title: "140%",
      text: "180%",
    },
    transitionDuration: {
      400: "400ms",
    },
    extend: {},
  },
  plugins: [],
};
