const capitalize = str =>
  str.toLowerCase().replace(/\b[a-z](?=[a-z]{2})/g, function (letter) {
    return letter.toUpperCase();
  });

module.exports = {
  capitalize,
};
