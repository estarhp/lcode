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

const maxDepth = function(root: TreeNode): number {
    let depth =0
    let max = 0
    function order(node: TreeNode) {
        if (!node) {
            return
        }
        depth ++
        max = Math.max(depth,max)
        order(node.left)
        order(node.right)
        depth --
    }
    order(root)
    return max
};



const root: TreeNode = {
    val: 1,
    left: null,
    right: {
      left: null,
      right: null,
      val: 2
    }
}

console.log(maxDepth(root))