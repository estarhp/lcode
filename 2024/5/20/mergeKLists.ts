/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import {ListNode} from "../global";

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists: ListNode[]): ListNode {
    if (!lists || !lists.length) {
        return null
    }else {
        return merge(lists,0,lists.length - 1)
    }
};

function merge(list: ListNode[],left: number,right: number): ListNode {
    if (left === right) {
        return list[left]
    }
    if (right - left ===  1) {
        return mergeTwoList(list[left],list[right])
    }
    const center = Math.floor((left + right) / 2)
    const leftList = merge(list,left,center)
    const rightList = merge(list,center + 1,right)
    return mergeTwoList(leftList,rightList)
}

function mergeTwoList(list1: ListNode,list2: ListNode): ListNode {
    if (list1 && list2) {
        if (list1.val < list2.val) {
            list1.next = mergeTwoList(list1.next,list2)
            return list1
        }else {
            list2.next = mergeTwoList(list2.next,list1)
            return list2
        }
    }else if(!list1) {
        return  list2
    }else if(!list2) {
        return list1
    }
}

const list1: ListNode = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 5,
            next: {
                val: 7,
                next: null
            }
        }
    }
}
const list3: ListNode = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 5,
            next: {
                val: 7,
                next: null
            }
        }
    }
}

const list2: ListNode = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 6,
            next: {
                val: 8,
                next: null
            }
        }
    }
}
const list4: ListNode = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 6,
            next: {
                val: 8,
                next: null
            }
        }
    }
}
const list = [list1,list2,list3,list4]
console.log(mergeKLists(list))