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
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head: ListNode, k: number): ListNode {
    let length = 0
    for (let currentNode = head; currentNode !== null; currentNode = currentNode.next) {
        length ++
    }
    const more = length % k
    let count = 0,groupCount = 0
    let currentNode = head,newHead: ListNode = {
        val: 1,
        next: null
    },pre = newHead,end = null
    while(count < length - more) {
        let firstNode = currentNode
        for (let preNode = null; currentNode !== null && groupCount < k;) {
            const nextNode = currentNode.next
            currentNode.next = preNode
            preNode = currentNode
            currentNode = nextNode
            groupCount ++
            count ++
            if (groupCount === k) {
                end = preNode
            }
        }
        pre.next = end
        pre = firstNode
        groupCount = 0
    }
    pre.next = currentNode

    return  newHead.next
};


const head: ListNode = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: {
                            val: 7,
                            next: {
                                val: 8,
                                next: null
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(reverseKGroup(head,3))

