"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hasCycle = function (head) {
    const nodeMap = new Map();
    for (let currentNode = head; currentNode !== null; currentNode = currentNode.next) {
        if (nodeMap.has(currentNode)) {
            return true;
        }
        else {
            nodeMap.set(currentNode, currentNode.val);
        }
    }
    return false;
};
//# sourceMappingURL=hasCycle.js.map