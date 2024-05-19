"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hasCycle = function (head) {
    if (!head) {
        return false;
    }
    let lowNode = head, fastNode = head.next;
    while (lowNode !== fastNode) {
        if (!lowNode || !fastNode || !fastNode.next) {
            return false;
        }
        lowNode = lowNode.next;
        fastNode = fastNode.next.next;
    }
    return true;
};
const head = {
    val: 1,
    next: null
};
console.log(hasCycle(head));
//# sourceMappingURL=hasCycle2.js.map