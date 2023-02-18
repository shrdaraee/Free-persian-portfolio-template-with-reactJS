/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#00CEDB",
        green: "#67D142",
        yellow: "#F5B02C",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgb(0,0,0,0.35)",
      },
      boxShadow: {
        testi: "0px 0px 30px 5px rgba(255, 199, 3, 0.07)",
      },
      backgroundImage: (theme = {
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00CEDB 7.21%, #FFCA28 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #FFCA28 14.53%,  #00CEDB 117.73%)",
      }),
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
