function minPathSum(grid: number[][]): number {

    const row = grid.length
    const col = grid[0].length

    const dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0))

    dp[0][0] = grid[0][0]

    // 首列
    for (let i = 1; i < row; i++) {
        dp[i][0] = grid[i][0] + dp[i - 1][0]
    }

    // 首行
    for (let i = 1; i < col; i++) {
        dp[0][i] = grid[0][i] + dp[0][i - 1]
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }


    return dp[row - 1][col - 1]
};

const grid = [[1,3,1],[1,5,1],[4,2,1]]

console.log(minPathSum(grid))