"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maxDepth = function (root) {
    let depth = 0;
    let max = 0;
    function order(node) {
        if (!node) {
            return;
        }
        depth++;
        max = Math.max(depth, max);
        order(node.left);
        order(node.right);
        depth--;
    }
    order(root);
    return max;
};
const root = {
    val: 1,
    left: null,
    right: {
        left: null,
        right: null,
        val: 2
    }
};
console.log(maxDepth(root));
//# sourceMappingURL=maxDepth.js.map