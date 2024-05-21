"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isSymmetric = function (root) {
    const queue = [];
    orderLeft(root.left, queue);
    const result = orderRight(root.right, queue);
    if (!result) {
        return false;
    }
    return queue.length === 0;
};
function orderLeft(node, queue) {
    if (!node) {
        queue.push(null);
        return;
    }
    queue.push(node.val);
    orderLeft(node.left, queue);
    orderLeft(node.right, queue);
}
function orderRight(node, queue) {
    if (!node) {
        const first = queue[0];
        if (first === node) {
            queue.shift();
            return true;
        }
        else {
            return false;
        }
    }
    if (queue[0] === node.val) {
        queue.shift();
    }
    else {
        return false;
    }
    const leftResult = orderRight(node.right, queue);
    if (!leftResult) {
        return false;
    }
    return orderRight(node.left, queue);
}
const root = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: null
    }
};
console.log(isSymmetric(root));
//# sourceMappingURL=isSymmetric.js.map