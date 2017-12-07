
// Remember to see if it's possible to save time using an object
// Previously I would have used slice() and includes() to search remaining items in array
// Using a Set keeps it O(n)

function twoSum(array, num) {
  const seenNums = new Set();

  for (let i = 0; i < array.length; i += 1) {
    const target = num - array[i];
    if (seenNums.has(target)) return true;
    seenNums.add(array[i]);
  }
  return false;
}

console.log(twoSum([3, 6, 9, 2, 4, 8, 9], 18));

