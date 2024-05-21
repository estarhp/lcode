/**
 * @param {number[][]} grid
 * @return {number}
 */

const orangesRotting = function(grid: number[][]): number {
    let count = 0
    const row = grid.length
    const col = grid[0].length
    let queue: number[][] = [],nextQueue: number[][] = []
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 2) {
                queue.push([i,j])
            }
        }
    } //先找到所有的2
    while (queue.length > 0) {
        nextQueue = []
        queue.forEach(([row,col]) => {
            bfs(grid,row - 1, col)
            bfs(grid,row + 1, col)
            bfs(grid,row, col - 1)
            bfs(grid,row, col + 1)
        })
        queue = []
        queue = nextQueue
        if (count === 0) {
            count --
        }
        count ++
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
               return -1
            }
        }
    } //找到1

    function bfs(grid: number[][],row: number,col: number) {
        if (!grid[row] || !grid[row][col]) {
            return
        }
        if (grid[row][col] === 2 || grid[row][col] === 0) {
            return;
        }
        grid[row][col] = 2
        nextQueue.push([row, col])
    }

    return count

};



const grid = [[1]]

console.log(orangesRotting(grid))

