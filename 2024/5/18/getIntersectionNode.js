"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getIntersectionNode = function (headA, headB) {
    let currentNode = null;
    const NodeMap = new Map();
    for (currentNode = headA; currentNode !== null; currentNode = currentNode.next) {
        NodeMap.set(currentNode, currentNode.val);
    }
    for (currentNode = headB; currentNode !== null; currentNode = currentNode.next) {
        if (NodeMap.has(currentNode)) {
            return currentNode;
        }
    }
};
//# sourceMappingURL=getIntersectionNode.js.map