/**
 * Input array is semi-sorted. The start and end points are somewhere in the middle
 * e.g. c,d,e,a,b
 * The function returns the index of the start (3 in this example) using a modified binary search
 * @param {array} array
 * @returns {integer} index where array rotates
 */
function findRotationPointInSemiSorted(array) {
  // array is not rotated so just return first elem
  if (array[0] < array[array.length - 1]) return 0;

  let floorIndex = 0;
  let ceilingIndex = array.length - 1;
  const firstEl = array[0];

  while (ceilingIndex > floorIndex) {
    const guessIndex = Math.floor(((ceilingIndex - floorIndex) / 2) + floorIndex);

    // we know that if the guess is greater than the first element
    // then the start (the smallest element) must be to the right
    if (array[guessIndex] > firstEl) {
      floorIndex = guessIndex;
    }
    if (array[guessIndex] < firstEl) {
      ceilingIndex = guessIndex;
    }
    /**
     * This is the key peice. Without it, the loop continues endlessly...
     * guess === floor === ceiling - 1
     * But when the floor and ceiling are adjacent we know that
     * the ceiling is the start and the floor is the end.
     */
    if (floorIndex + 1 === ceilingIndex) break;
  }
  return ceilingIndex;
}

const arr = ['b', 'c', 'd', 'e', 'g', 'i', 'a'];

console.log(findRotationPointInSemiSorted(arr));

