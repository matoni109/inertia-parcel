module.exports = {
  mode: "jit",
  content: [
    "./**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/*.js",
    "./app/javascript/Components/*.js",
    "./app/Pages/*.js",
  ],
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
