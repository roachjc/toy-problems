
function getIndexOfClosingParen(string, openIndex) {
  const parens = [];
  parens.push(string[openIndex]);
  for (let i = openIndex + 1; i < string.length; i += 1) {
    const char = string[i];
    if (char === '(') parens.push(char);
    if (char === ')') {
      if (parens.length === 1) return i;
      parens.pop();
    }
  }
  throw new Error('Unbalanced Parens');
}

const sentence = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';
console.log(getIndexOfClosingParen(sentence, 10));
