/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums: number[]): number {
    const maxSum = Number.MIN_VALUE;
     //先来个前缀和
    const frontSum = [0]
    for (let index = 0; index < nums.length; index++) {
       frontSum[index + 1] = frontSum[index] + nums[index]
    }
    let minIndex = 0
    let maxIndex = 0

    while (maxIndex < frontSum.length) {
        const R = frontSum[maxIndex]
        const L = frontSum[minIndex]
    }


    return frontSum[maxIndex] - frontSum[minIndex]

}

const nums = [-1]
console.log(maxSubArray(nums))