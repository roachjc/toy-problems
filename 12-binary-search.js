

function searchInSortedRecursive(array, n) {
  const guess = Math.floor(array.length / 2);
  if (array[guess] === n) return true;
  if (array.length < 1) return false;
  

  if (array[guess] < n) {
    array = array.slice(guess + 1);
    return searchInSorted(array, n);
  }

  if (array[guess] > n) {
    array = array.slice(0, guess);
    return searchInSorted(array, n);
  }
  return false;
}

function searchInSortedIterative(array, n) {
  let highIndex = array.length - 1;
  let lowIndex = 0;
  // while (highIndex > lowIndex) {
  for (let i = 0; i < 5; i += 1) {
    const midIndex = Math.floor((highIndex - lowIndex) / 2) + lowIndex;
    const guess = array[midIndex];
   
    if (guess === n) return true;
    
    if (guess > n) {
      highIndex = midIndex;
    }
    if (guess < n) {
      lowIndex = midIndex;
    }
  }
  return false;
}

const testArray = [1, 3, 5, 7, 9, 11, 13, 15];

console.log(searchInSortedIterative(testArray, 13));
