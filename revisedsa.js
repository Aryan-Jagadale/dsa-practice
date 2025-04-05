function minCoins(coins, amount) {
  // Sort the coins in descending order
  coins.sort((a, b) => b - a);
  let ans = []
  let n = coins.length;

  for (let i = 0; i < n; i++) {
    const element = coins[i];
    if (element < amount) {
      amount-=element;
      ans.push(element)
    }


    

  }

  return ans;

}

// Example usage:
const coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000]
const amount = 63;
console.log(minCoins(coins, amount)); 