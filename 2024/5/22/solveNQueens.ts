function solveNQueens(n: number): string[][] {
    const grid = new Array(n).fill(new Array(n).fill(0))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if(grid[i][j] === 0) {
                insert(grid,[i,j])
                grid[i][j] = 2
            }
        }
    }
};

function insert(grid: number[][],[row,col]: number[]) {
    for (let i = 0; i < grid.length; i++) {
        grid[row][i] = 1
    }
    for (let i = 0; i < grid.length; i++) {
        grid[i][col] = 1
    }
    for (let i = row - col,j = 0; i < grid.length || j < grid.length; i++,j++) {
        if (i < 0) {
            continue
        }
        grid[i][j] = 1
    }
}