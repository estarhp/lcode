function solveNQueens(n: number): string[][] {
    const result: string[][] = []
    const grid = Array.from({length: n},() => new Array(n).fill("."))
    const cols = new Array(n).fill(false)
    const diags1 = new Array(2 * n - 1).fill(false)
    const diags2 = new Array(2 * n - 1).fill(false)
    backtrack(grid,n,0,cols,result,diags1,diags2)
    return result
};

function backtrack(grid: string[][],n: number,row: number,cols: boolean[],result: string[][],diags1: boolean[],diags2: boolean[]) {
    if (row === n) {
        result.push(grid.map(row => row.join("")))
        return
    }

    for (let i = 0; i < n; i++) {
        const diag1 = row - i + n - 1;
        const diag2 = row + i;
        if (!cols[i] && !diags1[diag1] && ! diags2[diag2]) {
            grid[row][i] = 'Q'
            cols[i] = diags1[diag1] = diags2[diag2] = true;
            backtrack(grid,n,row + 1,cols,result,diags1,diags2)
            cols[i] = false
            cols[i] = diags1[diag1] = diags2[diag2] = false;
            grid[row][i] = '.'
        }
    }

}

console.log(solveNQueens(8))
