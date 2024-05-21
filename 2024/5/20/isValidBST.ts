/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import {TreeNode} from "../global";
type Node =  TreeNode & {
    min: number,
    max: number,
    left: Node,
    right: Node
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root: Node): boolean {
    if (!root) {
        return true
    }
    if (!(isValidBST(root.left) && isValidBST(root.right))) {
        return false
    }
    if (root.left && root.left.max >= root.val) {
        return false
    }else {
        root.max = root.right ? root.right.max : root.val
    }
    if (root.right && root.right.min <= root.val) {
        return false
    }else {
        root.min = root.left ? root.left.min : root.val
    }
    return true
};


