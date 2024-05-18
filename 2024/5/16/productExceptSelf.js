"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productExceptSelf = function (nums) {
    const answer = [];
    const front = [1];
    const end = [1];
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        front[i + 1] = front[i] * nums[i];
        end[i + 1] = end[i] * nums[length - i - 1];
    }
    for (let i = 0; i < length; i++) {
        answer[i] = front[i] * end[length - i - 1];
    }
    return answer;
};
console.log(productExceptSelf([1, 2, 3, 4]));
//# sourceMappingURL=productExceptSelf.js.map