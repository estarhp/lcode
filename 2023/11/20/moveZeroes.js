/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let zeroNumber = 0
    for (let i = 0; i < nums.length ; i++) {
         if (i >= nums.length - zeroNumber) {
             nums[i] = 0
         }else {
             if (!nums[i + zeroNumber]){
                 zeroNumber++
                 i--
             }else {
                 nums[i] = nums[i + zeroNumber]
             }
         }
    }

};

const nums = [1,0,0,2,3]
moveZeroes(nums)
console.log(nums)