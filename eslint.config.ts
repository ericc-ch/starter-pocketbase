import config from "@echristian/eslint-config"

export default config({
  react: {
    enabled: true,
  },
  reactHooks: {
    enabled: true,
  },

  prettier: {
    tailwindStylesheet: "./src/app.css",
    plugins: ["prettier-plugin-packagejson", "prettier-plugin-tailwindcss"],
  },
})
