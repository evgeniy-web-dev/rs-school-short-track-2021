/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
// function getEmailDomain(email) {
//   return email.match(/(?<=@)[a-zA-z0-9-]+\.[a-z]{2,3}$/)[0];
// }

function getEmailDomain(email) {
  const emailArr = email.split('@');

  return emailArr[emailArr.length - 1];
}

module.exports = getEmailDomain;
