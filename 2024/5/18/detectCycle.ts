/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
import {ListNode} from "../global";
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function(head: ListNode): ListNode {
    const nodeMap = new Map()
    for (let currentNode = head; currentNode !== null ; currentNode = currentNode.next) {
        if (nodeMap.has(currentNode)) {
            return currentNode
        }else {
            nodeMap.set(currentNode,currentNode.val)
        }
    }
    return null
};