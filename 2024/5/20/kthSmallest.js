"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kthSmallest = function (root, k) {
    let count = 0;
    let result = null;
    order(root);
    function order(node) {
        if (!node || result !== null) {
            return;
        }
        order(node.left);
        count++;
        if (count === k) {
            result = node.val;
        }
        order(node.right);
    }
    return result;
};
//# sourceMappingURL=kthSmallest.js.map