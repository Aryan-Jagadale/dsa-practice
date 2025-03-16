function minCoins(coins, amount) {
    // Sort the coins in descending order
    coins.sort((a, b) => b - a);

    let arr = []
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            arr.push(coins[i]);
        }
        
    }

    return arr.length;
}

// Example usage:
const coins = [1, 2, 5, 10, 25];
const amount = 63;
console.log(minCoins(coins, amount)); // Output: 5 (25 + 25 + 10 + 2 + 1)