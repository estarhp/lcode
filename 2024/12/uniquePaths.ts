function uniquePaths(m: number, n: number): number {
     const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))

    dp[1][1] = 1

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {

            if(i === 1 && j === 1) {
                continue
            }
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

     return dp[n][m]
};

console.log(uniquePaths(3,7))