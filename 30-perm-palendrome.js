// Check if any PERMUTATION of a string is a palendrome

function canBePalendromic(string) {
  // Use a set to effectively track a boolean value.
  const charsWithOddCount = new Set();
  for (let i = 0; i < string.length; i += 1) {
    const char = string[i];
    if (charsWithOddCount.has(char)) charsWithOddCount.delete(char);
    else charsWithOddCount.add(char);
  }
  return charsWithOddCount.size < 2;
}

console.log(canBePalendromic('ivicc'));
