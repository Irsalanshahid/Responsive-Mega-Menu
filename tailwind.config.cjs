module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        prussianBlue: {
          100:'##447baa',
          700:'#115173',
          800:'#053F5E',
          900: '#022C43',
        }, //FFD700
        yellowC: {
          700:'#FFD700',
          
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    require("prettier-plugin-tailwindcss")
  ],
};
