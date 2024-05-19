/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import {ListNode} from "../global";
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head: ListNode): ListNode {
    let currentNode: ListNode = null, preNode: ListNode = null
    for (currentNode = head,preNode = null; currentNode !== null;) {
        const nextNode = currentNode.next
        currentNode.next = preNode
        preNode = currentNode
        currentNode = nextNode
    }
    return preNode
};