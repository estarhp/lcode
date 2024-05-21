"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diameterOfBinaryTree = function (root) {
    let maxDepth = 0;
    function getDepth(node) {
        if (!node) {
            return 0;
        }
        const L = getDepth(node.left);
        const R = getDepth(node.right);
        maxDepth = Math.max(L + R, maxDepth);
        return Math.max(L, R) + 1;
    }
    getDepth(root);
    return maxDepth;
};
//# sourceMappingURL=diameterOfBinaryTree.js.map