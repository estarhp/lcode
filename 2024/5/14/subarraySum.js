"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subarraySum = function (nums, k) {
    let result = 0, map = new Map(), preNum = 0;
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        preNum += num;
        if (map.has(preNum - k)) {
            result += map.get(preNum - k);
        }
        map.set(preNum, (map.get(preNum) ?? 0) + 1);
    }
    return result;
};
const nums = [1, -1, 0];
console.log(subarraySum(nums, 0));
//# sourceMappingURL=subarraySum.js.map