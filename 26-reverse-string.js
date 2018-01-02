/**
 * Reverses a string in place by first transforming into array
 * @param {any} string
 * @returns string
 */
function reverseInPlace(string) {
  const letters = string.split('');
  const halfway = Math.floor(letters.length / 2);
  const end = letters.length - 1;

  for (let i = 0; i < halfway; i += 1) {
    [letters[i], letters[end - i]] = [letters[end - i], letters[i]];
  }
  return letters.join('');
}

const stringToReverse = 'jonathan';

console.log(reverseInPlace(stringToReverse));
