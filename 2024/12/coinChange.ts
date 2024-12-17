function coinChange(coins: number[], amount: number): number {
   const dp = new Array(amount + 1).fill(Infinity)

    dp[0] = 0

    for (let i = 1; i < amount + 1; i++) {
        for (let j = 0; j < coins.length; j++) {
            const coinAmount = coins[j]

            if(coinAmount > i) {
                continue
            }

            dp[i] = Math.min(dp[i], dp[i - coinAmount] + 1);
        }
    }

    return dp[amount] === Infinity ?  -1 : dp[amount]
};

const coins = [1, 2, 5], amount = 11

console.log(coinChange(coins, amount))