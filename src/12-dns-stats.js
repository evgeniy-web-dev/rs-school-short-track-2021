/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const obj = {};
  domains.forEach((domain) => {
    const arr = domain.split('.');
    arr.forEach((el, ind) => {
      const entity = `.${arr.slice(ind).reverse().join('.')}`;
      if (!obj[entity]) {
        obj[entity] = 1;
      } else {
        obj[entity]++;
      }
    });
  });
  return obj;
}

module.exports = getDNSStats;
