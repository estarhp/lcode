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
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//     //左右指针 一个迭代 一个表示end
//     //swap
//     let left=0;
//     let right=0;
//
//     function swap(left,right){
//         nums[left]=nums[right];
//     }
//     while(right<nums.length){
//         if(nums[right]!==0){
//             swap(left,right)
//             left++;
//         }
//         right++
//     }
//     while(left<nums.length){
//         nums[left]=0
//         left++;
//     }
//
// };


const nums = [1,0,0,2,3]
moveZeroes(nums)
console.log(nums)