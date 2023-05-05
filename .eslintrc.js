module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-dinocy`
  extends: ["dinocy"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
