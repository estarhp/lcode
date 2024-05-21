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
 * @return {number[][]}
 */
export const levelOrder = function(root: TreeNode): number[][] {
    if (!root) {
        return []
    }
    const levelResult: number[][] = []
    const queue: TreeNode[][] = [[root]]

    for (let i = 0; i < queue.length; i++) {
        const array: TreeNode[] = []
        const levelVal: number[] = []
        queue[i].forEach((node) => {
            levelVal.push(node.val)
            if (node.left) {
                array.push(node.left)
            }
            if (node.right) {
                array.push(node.right)
            }
        })
        levelResult.push(levelVal)
        if (array.length) {
            queue.push(array)
        }
    }
    return levelResult
};