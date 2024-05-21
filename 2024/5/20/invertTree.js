"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invertTree = function (root) {
    if (!root) {
        return root;
    }
    const leftNode = invertTree(root.left);
    const rightNode = invertTree(root.right);
    root.right = leftNode;
    root.left = rightNode;
    return root;
};
//# sourceMappingURL=invertTree.js.map