"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inorderTraversal = function (root) {
    const result = [];
    inorder(root, result);
    return result;
};
function inorder(node, result) {
    if (node === null) {
        return;
    }
    inorder(node.left, result);
    result.push(node.val);
    inorder(node.right, result);
}
//# sourceMappingURL=inorderTraversal.js.map