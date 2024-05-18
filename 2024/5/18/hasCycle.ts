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
    const nodeMap = new Map()
    for (let currentNode = head; currentNode !== null ; currentNode = currentNode.next) {
        if (nodeMap.has(currentNode)) {
            return true
        }else {
            nodeMap.set(currentNode,currentNode.val)
        }
    }
    return false
};

