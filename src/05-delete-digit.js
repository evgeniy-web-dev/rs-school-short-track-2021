/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  const min = n.toString().split('').sort()[0];

  return Number(n.toString().replace(min, ''));
}

module.exports = deleteDigit;
