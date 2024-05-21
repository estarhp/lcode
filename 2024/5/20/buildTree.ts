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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder: number[], inorder: number[]): TreeNode {
    if (preorder.length === 1 || inorder.length === 1) {
        return {
            val: preorder[0],
            left: null,
            right: null
        }
    }
    if (preorder.length === 0 || inorder.length === 0) {
        return null
    }
    const rootValue = preorder[0]
    const centerIndex = inorder.indexOf(rootValue)
    const leftInOrder = inorder.slice(0,centerIndex)
    const leftPreOrder = preorder.slice(1,leftInOrder.length + 1)
    const rightInOrder = inorder.slice(centerIndex + 1, inorder.length)
    const rightPreOrder = preorder.slice(leftPreOrder.length + 1,preorder.length)
    return {
        val: rootValue,
        left: buildTree(leftPreOrder, leftInOrder),
        right: buildTree(rightPreOrder, rightInOrder)
    }
};

const preorder = [1,2]
const inorder = [2,1]

console.log(buildTree(preorder,inorder))
