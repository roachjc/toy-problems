const stockPricesYesterday = [10, 7, 5, 3, 2, 1];

const getMaxProfit = (prices) => {
  let maxProfit = prices[1] - prices[0];
  let lowPrice = Math.min(prices[1], prices[0]);
  for (let i = 2; i < prices.length; i += 1) {
    maxProfit = Math.max(maxProfit, prices[i] - lowPrice);
    lowPrice = Math.min(lowPrice, prices[i]);
  }
  return maxProfit;
};

console.log(getMaxProfit(stockPricesYesterday));

