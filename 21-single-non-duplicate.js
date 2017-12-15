
/**
 * Given an array of duplicate numbers and a single non-duplicated number
 * Find the number that is not duplicated.
 * @param {array} numbers 
 * @returns integer
 */
function getNonDuplication(numbers) {
  const nonDuplicates = new Set();
  numbers.forEach((number) => {
    if (nonDuplicates.has(number)) nonDuplicates.delete(number);
    else nonDuplicates.add(number);
  });
  return nonDuplicates.values().next().value;
}

// Can also do this with bitwise operators. Means 0(n) time and 0(1) space
//  ????!
function getNonDupesBitwise(numbers) {
  let uniqueID = 0;
  numbers.forEach((number) => {
    uniqueID ^= number;
  });
  return uniqueID;
}
const ids = [1, 2, 1, 3, 4, 2, 4];

console.log(getNonDupesBitwise(ids))
