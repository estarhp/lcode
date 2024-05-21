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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums: number[]): TreeNode {
    if (nums.length === 0) {
        return null
    }

    if (nums.length == 1) {
        return {
            val: nums[0],
            right: null,
            left: null
        }
    }
    const left = 0
    const right = nums.length - 1
    const center = Math.floor((left + right) / 2)
    return  {
        val: nums[center],
        left: sortedArrayToBST(nums.slice(left,center)),
        right: sortedArrayToBST(nums.slice(center + 1, right + 1))
    }
};

const nums = [-10,-3,0,5,9]

console.log(sortedArrayToBST(nums))