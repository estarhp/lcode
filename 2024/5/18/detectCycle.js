"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const detectCycle = function (head) {
    const nodeMap = new Map();
    for (let currentNode = head; currentNode !== null; currentNode = currentNode.next) {
        if (nodeMap.has(currentNode)) {
            return currentNode;
        }
        else {
            nodeMap.set(currentNode, currentNode.val);
        }
    }
    return null;
};
//# sourceMappingURL=detectCycle.js.map