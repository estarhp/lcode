function searchMatrix(matrix: number[][], target: number): boolean {
    const row = matrix.length,col = matrix[0].length
    let left = 0, right = row * col - 1
    if (matrix[0][0] === target) {
        return true
    }
    if (matrix[row - 1][col - 1] === target) {
        return true
    }
    while (right - left > 1) {
        const center = Math.floor((left + right) / 2)
        const centerRow = Math.floor(center / col)
        const centerCol = Math.floor(center % col)
        if (matrix[centerRow][centerCol] === target) {
            return true
        }
        if (matrix[centerRow][centerCol] < target) {
            left = center
        }else {
            right = center
        }
    }
    return false
};

const matrix = [[1]]

console.log(searchMatrix(matrix,1))