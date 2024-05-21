"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sortedArrayToBST = function (nums) {
    if (nums.length === 0) {
        return null;
    }
    if (nums.length == 1) {
        return {
            val: nums[0],
            right: null,
            left: null
        };
    }
    const left = 0;
    const right = nums.length - 1;
    const center = Math.floor((left + right) / 2);
    return {
        val: nums[center],
        left: sortedArrayToBST(nums.slice(left, center)),
        right: sortedArrayToBST(nums.slice(center + 1, right + 1))
    };
};
const nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));
//# sourceMappingURL=sortedArrayToBST.js.map