/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix: number[][], target: number): boolean {
    const row = matrix.length
    const col = matrix[0].length
    for (let i = 0; i < row; i++) {
        if (target === matrix[i][0]) {
            return true
        }

        if (target > matrix[i][0]) {
            if (target === matrix[i][col - 1]) {
                return  true
            }
            if (matrix[i][col - 1] < target) {
                continue
            }
            //二分查找
            let left = 0, right = col - 1
            while(right - left > 1) {
                const center = Math.ceil((right + left) / 2)
                if (matrix[i][center] > target) {
                    right = center
                }else if (matrix[i][center] < target) {
                    left = center
                }else if (matrix[i][center] === target) {
                    return true
                }
            }
        }
        if (target < matrix[i][0]) {
            break
        }
    }
    return false
};

const matrix = [[1,4,7,11,15],[2,3,8,12,19],[3,4,5,16,22],[10,13,14,17,24],[18,21,23,26,30]]

console.log(searchMatrix(matrix,5))