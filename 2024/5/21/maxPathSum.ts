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
 * @return {number}
 */
const maxPathSum = function(root: TreeNode): number {
    let max = -Infinity
    function order (node: TreeNode): number {
        if (!node) {
            return 0
        }
        const maxLeft = order(node.left)
        const maxRight = order(node.right)
        max = Math.max(maxLeft + maxRight + node.val, max)
        if (Math.max(maxLeft,maxRight) + node.val < 0) {
            return 0
        }
        return Math.max(maxLeft,maxRight) + node.val
    }

    order(root)
    return max
};

const root: TreeNode = {
    val: 2,
    left: {
        val: -1,
        left: null,
        right: null
    },
    right:null
};

console.log(maxPathSum(root))