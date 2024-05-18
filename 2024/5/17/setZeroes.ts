/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix: number[][]): void {
    const COLMap = new Set<number>()
    const ROWMap = new Set<number>()
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                ROWMap.add(i)
                COLMap.add(j)
            }
        }
    }
    for (const rowMapElement of ROWMap) {
        for (let i = 0; i < matrix[rowMapElement].length; i++) {
            matrix[rowMapElement][i] = 0
        }
    }
    for (const colMapElement of COLMap) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][colMapElement] = 0
        }
    }
};

const matrix = [[1,1,1],[1,0,1],[1,1,1]]

setZeroes(matrix)

console.log(matrix)