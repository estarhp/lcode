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
 * @param {number} n
 * @return {ListNode}
 */
let count = 0
let head: ListNode = null
const removeNthFromEnd = function(headNode: ListNode, n: number): ListNode {
        count = n
        head = headNode
        deleteNode(headNode)
        return head
};

function deleteNode(currentNode: ListNode) {
    if (currentNode !== null) {
        if (!deleteNode(currentNode.next)) {
            count --
            if (count > 0) {
                return false
            }
            if (count === 0) {
                if (currentNode === head) {
                    head = currentNode.next
                }
            }
            if (count === -1) {
                currentNode.next = currentNode.next.next
                return true
            }
        }
    }
    return false
}


