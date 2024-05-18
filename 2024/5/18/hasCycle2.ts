/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

type ListNode = {
    val: any,
    next: ListNode | null
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head: ListNode): boolean {
    if (!head) {
        return false
    }
    let lowNode = head,fastNode = head.next

    while (lowNode !== fastNode) {
        if (!lowNode || !fastNode || !fastNode.next) {
            return false
        }
        lowNode = lowNode.next
        fastNode = fastNode.next.next
    }

    return true
};

const head: ListNode = {
    val: 1,
    next: null
}

console.log(hasCycle(head))

