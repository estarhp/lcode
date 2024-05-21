"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levelOrder = void 0;
const levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const levelResult = [];
    const queue = [[root]];
    for (let i = 0; i < queue.length; i++) {
        const array = [];
        const levelVal = [];
        queue[i].forEach((node) => {
            levelVal.push(node.val);
            if (node.left) {
                array.push(node.left);
            }
            if (node.right) {
                array.push(node.right);
            }
        });
        levelResult.push(levelVal);
        if (array.length) {
            queue.push(array);
        }
    }
    return levelResult;
};
exports.levelOrder = levelOrder;
//# sourceMappingURL=levelOrder.js.map