"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeTwoLists = function (list1, list2) {
    let currentNode = null, head = null;
    let leftCurrentNode = list1, rightCurrentNode = list2;
    while (leftCurrentNode || rightCurrentNode) {
        if (!rightCurrentNode || leftCurrentNode && leftCurrentNode.val < rightCurrentNode.val) {
            if (!head) {
                head = leftCurrentNode;
                currentNode = head;
            }
            else if (!rightCurrentNode) {
                currentNode.next = leftCurrentNode;
                break;
            }
            else {
                currentNode.next = leftCurrentNode;
                currentNode = currentNode.next;
            }
            leftCurrentNode = leftCurrentNode.next;
        }
        else {
            if (!head) {
                head = rightCurrentNode;
                currentNode = head;
            }
            else if (!leftCurrentNode) {
                currentNode.next = rightCurrentNode;
                break;
            }
            else {
                currentNode.next = rightCurrentNode;
                currentNode = currentNode.next;
            }
            rightCurrentNode = rightCurrentNode.next;
        }
    }
    return head;
};
const list1 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 1,
            next: null
        }
    }
};
const list2 = {
    val: 1,
    next: {
        val: 4,
        next: {
            val: 6,
            next: null
        }
    }
};
console.log(mergeTwoLists(list1, list2));
//# sourceMappingURL=mergeTwoLists.js.map