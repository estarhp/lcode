"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addTwoNumbers = function (l1, l2) {
    const head = {
        val: (l1.val + l2.val) % 10,
        next: null
    };
    let leftCurrentNode = l1.next, rightCurrentNode = l2.next, temp = Math.floor((l1.val + l2.val) / 10), currentNode = head;
    while (leftCurrentNode || rightCurrentNode || temp) {
        if (leftCurrentNode && rightCurrentNode) {
            const result = leftCurrentNode.val + rightCurrentNode.val + temp;
            currentNode.next = {
                val: result % 10,
                next: null
            };
            temp = Math.floor(result / 10);
            leftCurrentNode = leftCurrentNode.next;
            rightCurrentNode = rightCurrentNode.next;
        }
        else if (!leftCurrentNode && !rightCurrentNode && temp) {
            currentNode.next = {
                val: temp,
                next: null
            };
            temp = 0;
            break;
        }
        else if (!leftCurrentNode) {
            const result = rightCurrentNode.val + 0 + temp;
            currentNode.next = {
                val: result % 10,
                next: null
            };
            temp = Math.floor(result / 10);
            rightCurrentNode = rightCurrentNode.next;
        }
        else if (!rightCurrentNode) {
            const result = leftCurrentNode.val + 0 + temp;
            currentNode.next = {
                val: result % 10,
                next: null
            };
            temp = Math.floor(result / 10);
            leftCurrentNode = leftCurrentNode.next;
        }
        currentNode = currentNode.next;
    }
    return head;
};
const l1 = {
    val: 9,
    next: null
};
const l2 = {
    val: 9,
    next: null
};
console.log(addTwoNumbers(l1, l2));
//# sourceMappingURL=addTwoNumbers.js.map