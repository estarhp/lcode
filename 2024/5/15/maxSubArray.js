"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maxSubArray = function (nums) {
    let ans = -Infinity;
    let minPreSum = 0;
    let preSum = 0;
    for (const x of nums) {
        preSum += x;
        ans = Math.max(ans, preSum - minPreSum);
        minPreSum = Math.min(minPreSum, preSum);
    }
    return ans;
};
const nums = [-1];
console.log(maxSubArray(nums));
//# sourceMappingURL=maxSubArray.js.map