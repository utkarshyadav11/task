/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkChocolate: "#130F0C",
        gold: "#D29A5A",
        halfTransparent:"#0000008f;",
        newTransparent:"#ffffff3b"
      },
      width: {
        sidebar: "30rem", // Set the default width of the sidebar
        width90:"90%",
        width33:"33%",
      },
      height:{
        height26:"26rem",
        height22:"22rem",
        height50:"50vh",

      },
      translate: {
        '-initial': '-30%', // Define a custom translate value for '-initial'
      },
      translate_x_full:{
        "--tw-translate-x": "-30%",
      }
    },
  },
  plugins: [],
}
