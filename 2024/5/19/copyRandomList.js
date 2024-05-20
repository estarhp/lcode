"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const copyRandomList = function (head) {
    const oldNodeList = [];
    const randomNodeIndex = [];
    const newNodeList = [];
    for (let currentNode = head; currentNode !== null; currentNode = currentNode.next) {
        oldNodeList.push(currentNode);
    }
    for (let currentNode = head; currentNode !== null; currentNode = currentNode.next) {
        randomNodeIndex.push(oldNodeList.indexOf(currentNode.random));
    }
    for (let currentNode = head; currentNode !== null; currentNode = currentNode.next) {
        const newNode = {
            val: currentNode.val,
            next: null,
            random: null
        };
        newNodeList.push(newNode);
    }
    const newHead = newNodeList[0];
    for (let i = 0; i < newNodeList.length; i++) {
        if (i !== newNodeList.length - 1) {
            newNodeList[i].next = newNodeList[i + 1];
        }
        if (randomNodeIndex[i] !== -1) {
            newNodeList[i].random = newNodeList[randomNodeIndex[i]];
        }
    }
    return newHead;
};
//# sourceMappingURL=copyRandomList.js.map