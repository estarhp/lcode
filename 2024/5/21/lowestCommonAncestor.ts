/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
import {TreeNode} from "../global";

type Node = TreeNode & {
    p?: TreeNode,
    q?: TreeNode
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
    let commonNode: Node = null
    function order(node: Node) {
        if (commonNode) {
            return
        }
        if (!node) {
            return
        }
        if (node === p) {
            node.p = p
        }
        if (node === q) {
            node.q = q
        }
        const leftNode =order(node.left)
        insert(leftNode,node)
        const rightNode = order(node.right)
        insert(rightNode,node)
        if (node.p && node.q && !commonNode) {
            commonNode = node
        }
        return node
    }
    order(root)
    return commonNode
};

function insert(children: Node,node: Node) {
    if (!children) {
        return
    }
    if (!node.p && children.p) {
        node.p = children.p
    }
    if (!node.q && children.q) {
        node.q = children.q
    }
}