module.exports = {
  mode: "jit",
  content: [
    "./**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/Pages/*.js",
  ],
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
