/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
import {ListNode} from "../global";
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA: ListNode, headB: ListNode): ListNode | string {
    let currentNode: ListNode = null
    const NodeMap = new Map()
    for (currentNode = headA;currentNode !== null; currentNode = currentNode.next) {
        NodeMap.set(currentNode,currentNode.val)
    }
    for (currentNode = headB;currentNode !== null; currentNode = currentNode.next) {
        if (NodeMap.has(currentNode)) {
            return currentNode
        }
    }
};