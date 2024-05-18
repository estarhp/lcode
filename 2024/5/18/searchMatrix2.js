"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchMatrix = function (matrix, target) {
    const row = matrix.length, col = matrix[0].length;
    let i = 0, j = matrix[0].length - 1;
    while (i < row && j >= 0) {
        const current = matrix[i][j];
        if (current === target) {
            return true;
        }
        else if (current > target) {
            j--;
        }
        else if (current < target) {
            i++;
        }
    }
    return false;
};
const matrix = [[-5]];
console.log(searchMatrix(matrix, -5));
//# sourceMappingURL=searchMatrix2.js.map