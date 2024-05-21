/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import {TreeNode} from "../global";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root: TreeNode): boolean {
    const queue: number[] = []
    orderLeft(root.left, queue)
    const result = orderRight(root.right, queue)
    if (!result) {
        return false
    }
    return queue.length === 0
};

function orderLeft(node: TreeNode,queue: number[]) {
    if (!node) {
        queue.push(null)
        return
    }
    queue.push(node.val)
    orderLeft(node.left, queue)
    orderLeft(node.right, queue)
}

function orderRight(node: TreeNode,queue: number[]): boolean {
    if (!node) {
        const first = queue[0] as null
        if (first === node) {
            queue.shift()
            return true
        }else {
            return false
        }
    }
    if (queue[0] === node.val) {
        queue.shift()
    }else {
        return false
    }
    const leftResult = orderRight(node.right, queue)
    if (!leftResult) {
        return false
    }
    return orderRight(node.left, queue);
}

const root: TreeNode = {
    val:1,
    left: {
        val:2,
        left: null,
        right: null
    },
    right: {
        val:2,
        left: null,
        right: null
    }
}

console.log(isSymmetric(root))