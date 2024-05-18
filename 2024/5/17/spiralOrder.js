"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spiralOrder = function (matrix) {
    const result = [];
    const row = matrix.length;
    const col = matrix[0].length;
    let count = 0, layer = 0;
    while (count < col * row) {
        for (let i = layer; i < col - layer; i++) {
            result.push(matrix[layer][i]);
            count++;
        }
        for (let i = layer + 1; i < row - layer; i++) {
            result.push(matrix[i][col - layer - 1]);
            count++;
        }
        if (count === col * row) {
            break;
        }
        for (let i = col - layer - 2; i > layer - 1; i--) {
            result.push(matrix[row - layer - 1][i]);
            count++;
        }
        for (let i = row - layer - 2; i > layer; i--) {
            result.push(matrix[i][layer]);
            count++;
        }
        layer++;
    }
    return result;
};
const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log(spiralOrder(matrix));
//# sourceMappingURL=spiralOrder.js.map