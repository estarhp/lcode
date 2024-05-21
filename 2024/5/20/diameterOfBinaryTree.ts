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
const diameterOfBinaryTree = function(root: TreeNode): number {
    let maxDepth = 0
    function getDepth(node: TreeNode): number {
        if (!node) {
            return 0
        }

        const L = getDepth(node.left)
        const R = getDepth(node.right)
        maxDepth = Math.max(L + R ,maxDepth)

        return Math.max(L,R) + 1
    }
    getDepth(root)
    return maxDepth
};