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
const sortList = function(head: ListNode): ListNode {
    const sortList: ListNode[] = []
    for (let currentNode = head; currentNode !== null ; currentNode = currentNode.next) {
      sortList.push(currentNode)
    }
    sortList.sort((a, b) => {
        return a.val - b.val
    })
    let newHead = null
    for (let i = 0; i < sortList.length; i++) {
        if (!newHead) {
            newHead = sortList[i]
        }else {
            sortList[i - 1].next = sortList[i]
        }
    }
    if (sortList.length > 0) sortList[sortList.length - 1].next = null
    return newHead
};