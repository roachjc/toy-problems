// Calling fib recursively without memoize is shitty
// Calling with memo still sucks

function fib(number) {
  const memo = {};
  function innerFib(n) {
    if (n < 2) return n;
    if (memo[n]) {
      return memo[n];
    }
    const result = innerFib(n - 1) + innerFib(n - 2);
    memo[n] = result;
    return result;
  }

  return innerFib(number);
}

// Do it iteratively. Don't be a smartarse.
function fibIterative(n) {
  let prev = 1;
  let prevPrev = 0;
  let current;

  for (let i = 1; i < n; i += 1) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }
  return current;
}

console.log(fibIterative(4));
