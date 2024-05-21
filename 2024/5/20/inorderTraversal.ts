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
 * @return {number[]}
 */
const inorderTraversal = function(root: TreeNode): number[] {
    const result: number[] = []
    inorder(root,result)
    return result
};

function inorder(node: TreeNode,result: number[]) {
    if (node === null) {
        return
    }
    inorder(node.left,result)
    result.push(node.val)
    inorder(node.right,result)
}