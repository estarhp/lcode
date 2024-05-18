"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotate = function (nums, k) {
    let real_k = k % nums.length;
    const frontNums = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        if (real_k >= nums.length - i) {
            frontNums.push(nums[i]);
        }
        if (i < real_k) {
            nums[i] = frontNums[real_k - i - 1];
        }
        else {
            nums[i] = nums[i - real_k];
        }
    }
};
const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);
//# sourceMappingURL=rotate.js.map