"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatten = function (root) {
    const nodeArray = [];
    function order(node) {
        if (!node) {
            return;
        }
        nodeArray.push(node);
        order(node.left);
        order(node.right);
    }
    order(root);
    for (let i = 0; i < nodeArray.length; i++) {
        const node = nodeArray[i];
        node.right = i !== nodeArray.length - 1 ? nodeArray[i + 1] : null;
        node.left = null;
    }
};
const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: null
};
flatten(root);
console.log(root);
//# sourceMappingURL=flatten.js.map