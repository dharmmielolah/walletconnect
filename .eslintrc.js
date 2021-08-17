module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "react/prop-types": 0,
    "react/display-name": "off"
  }
};
