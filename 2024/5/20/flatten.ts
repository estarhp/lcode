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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function(root: TreeNode):void {
    const nodeArray: TreeNode[] = []
    function order(node: TreeNode) {
        if (!node) {
            return
        }
        nodeArray.push(node)
        order(node.left)
        order(node.right)
    }
    order(root)
    for (let i = 0; i < nodeArray.length; i++) {
        const node = nodeArray[i]
         node.right = i !== nodeArray.length - 1 ? nodeArray[i + 1] : null
        node.left = null
    }
};



const root: TreeNode = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: null
}

flatten(root)

console.log(root)