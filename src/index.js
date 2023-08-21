module.exports = function reverse (n) {
  let str = n.toString().split('').reverse().join('');
  let result = parseInt(str);
  return result;
}
