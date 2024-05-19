"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let count = 0;
let head = null;
const removeNthFromEnd = function (headNode, n) {
    count = n;
    head = headNode;
    deleteNode(headNode);
    return head;
};
function deleteNode(currentNode) {
    if (currentNode !== null) {
        if (!deleteNode(currentNode.next)) {
            count--;
            if (count > 0) {
                return false;
            }
            if (count === 0) {
                if (currentNode === head) {
                    head = currentNode.next;
                }
            }
            if (count === -1) {
                currentNode.next = currentNode.next.next;
                return true;
            }
        }
    }
    return false;
}
//# sourceMappingURL=removeNthFromEnd.js.map