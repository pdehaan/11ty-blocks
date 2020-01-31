const filters = {
  localeDateString(dateObj, dateStyle = "full") {
    return dateObj.toLocaleDateString([], { dateStyle });
  },
  isoString(dateObj) {
    return dateObj.toISOString();
  }
};

module.exports = config => {
  Object.entries(filters).forEach(([name, fn]) => config.addFilter(name, fn));
};
