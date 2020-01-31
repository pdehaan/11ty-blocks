const shortcodes = {};

module.exports = config => {
  Object.entries(shortcodes).forEach(([name, fn]) =>
    config.addShortcode(name, fn)
  );
};
