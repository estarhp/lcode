/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

import {Node} from "../global";

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function(head: Node): Node {
    const oldNodeList: Node[] = []
    const randomNodeIndex: number[] = []
    const newNodeList: Node[] = []
    for (let currentNode = head; currentNode !== null ; currentNode = currentNode.next) {
        oldNodeList.push(currentNode)
    }
    for (let currentNode = head; currentNode !== null ; currentNode = currentNode.next) {
        randomNodeIndex.push(oldNodeList.indexOf(currentNode.random))
    }
    for (let currentNode = head; currentNode !== null ; currentNode = currentNode.next) {
        const newNode: Node = {
            val: currentNode.val,
            next: null,
            random: null
        }
        newNodeList.push(newNode)
    }
    const newHead = newNodeList[0]

    for (let i = 0; i < newNodeList.length; i++) {
        if (i !== newNodeList.length - 1){
            newNodeList[i].next = newNodeList[i + 1]
        }
        if (randomNodeIndex[i] !== -1) {
            newNodeList[i].random = newNodeList[randomNodeIndex[i]]
        }
    }

    return newHead
};