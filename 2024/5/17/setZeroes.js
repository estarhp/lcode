"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setZeroes = function (matrix) {
    const COLMap = new Set();
    const ROWMap = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                ROWMap.add(i);
                COLMap.add(j);
            }
        }
    }
    for (const rowMapElement of ROWMap) {
        for (let i = 0; i < matrix[rowMapElement].length; i++) {
            matrix[rowMapElement][i] = 0;
        }
    }
    for (const colMapElement of COLMap) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][colMapElement] = 0;
        }
    }
};
const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(matrix);
console.log(matrix);
//# sourceMappingURL=setZeroes.js.map