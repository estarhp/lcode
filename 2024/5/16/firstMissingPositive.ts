/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums: number[]): number {
    let min = Infinity;
    let max = -Infinity
    for (let index = 0; index < nums.length; index++) {
        const number = nums[index];
        if (number < min && number > 0) {
            min = number;
        }
        if (number > max && number <= nums.length) {
            max = number
        }
    }
    if (min !== 1) {
        return 1;
    }
    for (let index = 0; index < nums.length;) {
        const number = nums[index];
        if (number === index + 1 || number <= 0 || nums[number - 1] === number || number > max) {
            index++;
            continue;
        }
        nums[index] = nums[number - 1];
        nums[number - 1] = number;
    }
    for (let index = 0; index < nums.length; index++) {
        const number = nums[index];
        if (number !== index + 1) {
            return index + 1;
        }
    }
    return nums[nums.length - 1] + 1;
};

const nums = [1,1]
console.log(firstMissingPositive(nums))