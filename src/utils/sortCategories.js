const sortCategories = arr => arr.sort((a, b) => a.name.localeCompare(b.name));

module.exports = {
  sortCategories,
};
