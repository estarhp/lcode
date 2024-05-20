"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sortList = function (head) {
    const sortList = [];
    for (let currentNode = head; currentNode !== null; currentNode = currentNode.next) {
        sortList.push(currentNode);
    }
    sortList.sort((a, b) => {
        return a.val - b.val;
    });
    let newHead = null;
    for (let i = 0; i < sortList.length; i++) {
        if (!newHead) {
            newHead = sortList[i];
        }
        else {
            sortList[i - 1].next = sortList[i];
        }
    }
    if (sortList.length > 0)
        sortList[sortList.length - 1].next = null;
    return newHead;
};
//# sourceMappingURL=sortList.js.map