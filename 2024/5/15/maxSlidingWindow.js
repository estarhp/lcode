"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maxSlidingWindow = function (nums, k) {
    const result = [], deque = [];
    let left = 0, right = 0;
    while (right < nums.length) {
        while (deque.length && deque.slice(-1)[0] < nums[right]) {
            deque.pop();
        }
        deque.push(nums[right]);
        if (right - left + 1 === k) {
            result.push(deque[0]);
            left++;
            if (nums[left - 1] === deque[0]) {
                deque.shift();
            }
        }
        right++;
    }
    return result;
};
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(maxSlidingWindow(nums, 3));
//# sourceMappingURL=maxSlidingWindow.js.map