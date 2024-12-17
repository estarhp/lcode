function numSquares(n: number): number {
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i < n + 1; i++) {
        dp[i] = i;


        for (let j = 1; i  >= j * j; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
        }

    }

    return dp[n]
};

console.log(numSquares(12))