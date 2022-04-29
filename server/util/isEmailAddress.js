module.exports = function (string) {
  const re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return re.test(string);
};
