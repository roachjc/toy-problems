/* Write a function that, given:

an amount of money
an array of coin denominations
computes the number of ways to make the amount of money with coins of the available denominations.
*/

const denoms = [2, 1];
const total = 4;

function getChange(amountLeft, denominations, currentIndex = 0) {
  // This means we have reached exact number
  if (amountLeft === 0) return 1;
  // this means we have overshot
  if (amountLeft < 0) return 0;
  // this means we are out of denominations
  if (currentIndex === denominations.length) return 0;

  console.log('checking ways to make ' + amountLeft + ' with [' + denominations.slice(currentIndex).join(', ') + ']');

  const currentCoin = denominations[currentIndex];
  let possibilities = 0;
  while (amountLeft >= 0) {
    possibilities += getChange(amountLeft, denominations, currentIndex + 1);
    amountLeft -= currentCoin;
  }

  return possibilities;
}

// Dynamic programming

function getMoreChange(amount, denominations) {
  // Index of waysOfDoing represent the target amount
  // Values in waysOfDoing represent the number of ways of reaching index val using denominations
  const waysOfDoing = new Array(amount + 1).fill(0);
  // There is always only one way of getting to 0 ---> use no coins!
  waysOfDoing[0] = 1;

  denominations.forEach((coin) => {
    // iterate from coin value to target amount
    for (let higherAmount = coin; higherAmount <= amount; higherAmount += 1) {
      // get the number of ways to get to target using just one of current coin
      const higherAmountRemainder = higherAmount - coin;
      // add those in to the index in waysOfDoing
      waysOfDoing[higherAmount] += waysOfDoing[higherAmountRemainder];
    }
  });

  return waysOfDoing[amount];
}


console.log(getMoreChange(total, denoms));
