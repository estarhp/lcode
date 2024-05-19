"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPalindrome = function (head) {
    const list = [];
    for (let currentNode = head; currentNode !== null; currentNode = currentNode.next) {
        list.push(currentNode.val);
    }
    for (let left = 0, right = list.length - 1; left < right; left++, right--) {
        if (list[left] !== list[right]) {
            return false;
        }
    }
    return true;
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
//# sourceMappingURL=isPalindrome.js.map