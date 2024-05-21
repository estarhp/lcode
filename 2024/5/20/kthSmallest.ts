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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root: TreeNode, k: number): number {
    let count = 0
    let result: number | null = null
    order(root)
    function order(node: TreeNode) {
        if (!node || result !== null) {
            return
        }
        order(node.left)
        count ++
        if (count === k) {
            result = node.val
        }
        order(node.right)
    }

    return result
};