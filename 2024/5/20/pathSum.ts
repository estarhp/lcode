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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function (root: TreeNode, targetSum: number): number {
    let result = 0, preSum = 0, map = new Map()
    map.set(0,1)
    function order(node: TreeNode) {
        if (!node) {
            return
        }
        preSum += node.val
        if (map.has(preSum - targetSum)) {
            result += map.get(preSum - targetSum)
        }
        map.set(preSum, map.has(preSum) ? map.get(preSum) + 1 : 1)
        order(node.left)
        order(node.right)
        map.set(preSum,map.get(preSum) - 1)
        if (map.get(preSum) === 0) {
            map.delete(preSum)
        }
        preSum -= node.val
    }

    order(root)
    return result
};


const root: TreeNode = {
    val:5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: null,
                right: null
            }
        },
        right: null
    },
   right: null
}

console.log(pathSum(root, 22))