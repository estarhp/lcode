/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
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
const isPalindrome = function(head: ListNode): boolean {
    const list: ListNode["val"][] = []
    for (let currentNode = head; currentNode !== null; currentNode = currentNode.next) {
        list.push(currentNode.val)
    }
    for (let left = 0, right = list.length -  1; left < right; left ++, right --) {
        if (list[left] !== list[right]) {
            return false
        }
    }

    return true
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