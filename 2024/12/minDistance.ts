function minDistance(word1: string, word2: string): number {
    const row = word1.length
    const col = word2.length

    const dp = new Array(row + 1).fill(0).map(() => new Array(col + 1).fill(Infinity))

    if (row === 0 || col === 0) {
        return row + col
    }

    dp[0][0] = 0


    for (let i = 1; i <= row; i++) {
        dp[i][0] = dp[i - 1][0] + 1
    }


    for (let i = 1; i <= col; i++) {
        dp[0][i] = dp[0][i - 1] + 1
    }


    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {

            if(word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
                continue
            }

            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1

        }
    }


    return dp[row][col]
};

const word1 = "a", word2 = "ab"

console.log(minDistance(word1, word2))