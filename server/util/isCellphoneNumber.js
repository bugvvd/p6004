module.exports = function (string) {
  const re = new RegExp("^1[3456789]d{9}$");
  return re.test(string);
};
