const filters = require("./filters");
const linters = require("./linters");
const shortcodes = require("./shortcodes");

const pkg = require("../../package.json");

module.exports = eleventyConfig => {
  filters(eleventyConfig);
  linters(eleventyConfig);
  shortcodes(eleventyConfig);

  return {
    dir: pkg.dir,
    markdownTemplateEngine: "njk"
  };
};
