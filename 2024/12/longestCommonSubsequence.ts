function longestCommonSubsequence(text1: string, text2: string): number {
    const row = text1.length
    const col = text2.length

    const dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0))

    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
             if(text1[i - 1] === text2[j - 1]) {
                 dp[i][j] = dp[i - 1][j - 1] + 1
                 continue
             }

             dp[i][j] = Math.max(dp[i -1][j], dp[i][j - 1])
        }
    }

    return dp[row][col]
};

const text1 = "bl", text2 = "yby"

console.log(longestCommonSubsequence(text1, text2));