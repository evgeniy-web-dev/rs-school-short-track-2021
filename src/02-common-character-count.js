/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let result = 0;
  // eslint-disable-next-line camelcase
  const s1_obj = s1.split('');
  // eslint-disable-next-line camelcase
  const s2_obj = s2.split('');
  // eslint-disable-next-line no-undef,array-callback-return
  s1_obj.sort().map((item) => {
    // eslint-disable-next-line no-undef,eqeqeq
    if (s2_obj.indexOf(item) != -1) {
      result += 1;
      // eslint-disable-next-line no-undef
      s2_obj.splice(s2_obj.indexOf(item), 1);
    }
  });
  return result;
}

module.exports = getCommonCharacterCount;
