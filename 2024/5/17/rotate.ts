/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix: number[][]): void {
    const n = matrix.length;
    const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix_new[j][n - i - 1] = matrix[i][j];
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = matrix_new[i][j];
        }
    }
};

const matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)

console.log(matrix)