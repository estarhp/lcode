"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseList = function (head) {
    let currentNode = null, preNode = null;
    for (currentNode = head, preNode = null; currentNode !== null;) {
        const nextNode = currentNode.next;
        currentNode.next = preNode;
        preNode = currentNode;
        currentNode = nextNode;
    }
    return preNode;
};
//# sourceMappingURL=reverseList.js.map