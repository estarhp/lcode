/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import {TreeNode} from "../global";
import {levelOrder} from "./levelOrder";

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function(root: TreeNode): number[] {
    const levelValues = levelOrder(root)
    return levelValues.map(level => level[level.length - 1])
};