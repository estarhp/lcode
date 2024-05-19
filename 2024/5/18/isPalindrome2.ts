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
 * @return {boolean}
 */

let frontNode: ListNode = null


const checkNode = function (currentNode: ListNode): boolean {
    if (currentNode !== null) {
        if (!checkNode(currentNode.next)) {
           return false
        }
        if (frontNode.val !== currentNode.val) {
            return false
        }
        frontNode = frontNode.next
    }
    return true
}

const isPalindrome = function(head: ListNode): boolean {
    frontNode = head
    return checkNode(head)
};

const head: ListNode = {
    val: 1,
    next: {
        val: 0,
        next: {
            val: 1,
            next: null
        }
    }
}

console.log(isPalindrome(head))