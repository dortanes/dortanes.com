module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-v-text-v-html-on-component": "off",
  },
};
