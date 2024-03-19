/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        contrail: "'Contrail One', sans-serif ",
        caveat: "'Caveat Variable', sans-serif ",
        dosis: "'Dosis Variable', sans",
        playpen: "'Playpen Sans Variable', cursive",
      },

      colors: {
        darkest: "#0F1035",
        darker: "#365486",
        normal: "#7FC7D9",
        light: "#FBF9F1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
