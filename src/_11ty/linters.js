const htmllint = require("htmllint");

const htmllintOpts = {
  "indent-style": false,
  "indent-width": false,
  "line-end-style": false,
  "line-no-trailing-whitespace": false
};

const linters = {
  htmllint(html, inputPath, outputPath) {
    const output = htmllint(html, htmllintOpts);
    output.then(res => {
      if (res.length) {
        console.log(outputPath, res);
      }
    });
  }
};

module.exports = config => {
  Object.entries(linters).forEach(([name, fn]) => config.addLinter(name, fn));
};
