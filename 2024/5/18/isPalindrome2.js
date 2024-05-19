"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let frontNode = null;
const checkNode = function (currentNode) {
    if (currentNode !== null) {
        if (!checkNode(currentNode.next)) {
            return false;
        }
        if (frontNode.val !== currentNode.val) {
            return false;
        }
        frontNode = frontNode.next;
    }
    return true;
};
const isPalindrome = function (head) {
    frontNode = head;
    return checkNode(head);
};
const head = {
    val: 1,
    next: {
        val: 0,
        next: {
            val: 1,
            next: null
        }
    }
};
console.log(isPalindrome(head));
//# sourceMappingURL=isPalindrome2.js.map