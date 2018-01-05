// could be done a little more concisely with a Set to hold openers and closers
// and or a map to map a opening bracket to its corresponding closing bracket

function balancedParens(string) {
  const parenStack = [];
  for (let i = 0; i < string.length; i += 1) {
    const char = string[i];
    const endParen = parenStack[parenStack.length - 1];

    if (char === '[' || char === '{' || char === '(') {
      parenStack.push(char);
    }

    if (char === ']') {
      if (endParen === '[') parenStack.pop();
      if (endParen === '{' || endParen === '(') return false;
    }
    if (char === '}') {
      if (endParen === '{') parenStack.pop();
      if (endParen === '[' || endParen === '(') return false;
    }
    if (char === ')') {
      if (endParen === '(') parenStack.pop();
      if (endParen === '{' || endParen === '[') return false;
    }
  }
  return parenStack.length === 0;
}

const sample = '{ [ }'

console.log(balancedParens(sample))