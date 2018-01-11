// Using a set prevents duplicate permutations rom having more that one of a given character

function allPermutationsOf(string) {
  if (string.length <= 1) {
    const baseSet = new Set(string);
    console.log(baseSet);
    return baseSet;
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  const permsOfAllButLast = allPermutationsOf(allCharsExceptLast);

  const permutations = new Set();

  permsOfAllButLast.forEach((perm) => {
    for (let position = 0; position <= allCharsExceptLast.length; position += 1) {
      const permutation = perm.slice(0, position) + lastChar + perm.slice(position);
      permutations.add(permutation);
    }
  });
  return permutations;
}

function anagrams(str) {
  if (str.length === 1) return str;
  const perms = [];
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    const remain = str.slice(0, i) + str.slice(i + 1);
    // const restofAnagrams = anagrams(remain); then combine these with the char then push into perms
    for (const perm of anagrams(remain)) {
      perms.push(char + perm);
    }
  }
  return perms;
}


console.log(allPermutationsOf('caas'));
