/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = function(grid: string[][]): number {
    let count = 0
    const row = grid.length
    const col = grid[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === "1") {
                count ++
                dfs(grid,i,j)
            }
        }
    }
    return count
};

function dfs(grid: string[][],row: number,col: number) {
    if (!grid[row] || !grid[row][col]) {
        return;
    }
    if (grid[row][col] === '0') {
        return;
    }
    grid[row][col] = "0"
    dfs(grid,row - 1,col)
    dfs(grid,row + 1,col)
    dfs(grid, row, col - 1)
    dfs(grid, row, col + 1)
}