import config from "@echristian/eslint-config"

export default config({
  react: {
    enabled: true,
  },
  reactHooks: {
    enabled: true,
  },

  prettier: {
    plugins: ["prettier-plugin-packagejson"],
  },
})
