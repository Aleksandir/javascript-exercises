/**
 * Removes all occurrences of the specified values from the given array.
 *
 * @param {Array} list - The array from which values will be removed.
 * @param {...*} rest - The values to be removed from the array.
 * @returns {Array} The modified array with the specified values removed.
 */
const removeFromArray = function (list, ...rest) {
  let removingValue = rest;
  index = 0;
  for (let x = removingValue.length; x > 0; x--) {
    index = list.indexOf(removingValue[x - 1]);
    while (index > -1) {
      list.splice(index, 1);
      index = list.indexOf(removingValue[x - 1]);
    }
  }
  return list;
};

// Do not edit below this line
module.exports = removeFromArray;
