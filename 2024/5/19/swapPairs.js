"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swapPairs = function (head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }
    const newHeadNode = head.next;
    for (let currentNode = head, preNode = null; currentNode !== null && currentNode.next !== null; preNode = currentNode, currentNode = currentNode.next) {
        const nextNode = currentNode.next;
        const nextCurrentNode = nextNode.next;
        nextNode.next = currentNode;
        currentNode.next = nextCurrentNode;
        if (preNode) {
            preNode.next = nextNode;
        }
    }
    return newHeadNode;
};
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
};
swapPairs(head);
//# sourceMappingURL=swapPairs.js.map