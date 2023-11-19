/**
 * @param {number[]} nums
 * @return {number}
 */

// const longestConsecutive = function(nums) {
//     let longest = 0
//     const minMap = new Map()
//     const maxMap = new Map()
//     const save = new Map()
//
//     for (let i = 0; i < nums.length; i++) {
//         const number = nums[i]
//         if (save.has(number)) continue
//         save.set(number,1)
//         if (!minMap.has(number) && !maxMap.has(number)){
//             minMap.set(number - 1,1)
//             maxMap.set(number + 1,1)
//             if (1 > longest){
//                 longest = 1
//             }
//             continue
//         }
//
//         if (minMap.has(number) && maxMap.has(number)){
//             const maxlong = minMap.get(number)
//             const minlong = maxMap.get(number)
//             const long = minlong + maxlong
//             const nextLong = long + 1
//             minMap.set(number - minlong - 1 ,nextLong)
//             maxMap.set(number + maxlong + 1,nextLong)
//
//
//             if (nextLong > longest){
//                 longest = nextLong
//             }
//             continue
//         }
//
//         if(minMap.has(number)){
//             const long =  minMap.get(number)
//             const nextLong = long + 1
//             minMap.set(number - 1,nextLong)
//             maxMap.set(number + long + 1, nextLong)
//             if (nextLong > longest){
//                 longest = nextLong
//             }
//         }
//
//         if (maxMap.has(number)){
//             const long =  maxMap.get(number)
//             const nextLong = long + 1
//             maxMap.set(number + 1,nextLong)
//             minMap.set(number - long - 1, nextLong)
//             if (nextLong > longest){
//                 longest = nextLong
//             }
//         }
//     }
//
//
//     return longest
// };

//
// const longestConsecutive = function(nums) {
//     let longest = 0
//     const numsMap = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         const number = nums[i]
//         if (!numsMap.has(number)){
//             if (!numsMap.has(number - 1) && !numsMap.has(number + 1) ){
//                 numsMap.set(number,{
//                     min: number,
//                     max: number
//                 })
//                 if (!longest){
//                     longest = 1
//                 }
//                 continue
//             }
//
//             if (numsMap.has(number - 1) && numsMap.has(number + 1)){
//
//                 const minObj = numsMap.get(number - 1)
//                 const maxObj = numsMap.get(number + 1)
//
//                 const newObj = {
//                     min: minObj.min,
//                     max: maxObj.max
//                 }
//                 numsMap.set(newObj.min,newObj)
//                 numsMap.set(newObj.max,newObj)
//                 numsMap.set(number,newObj)
//
//                 const long = newObj.max - newObj.min + 1
//                 if (long > longest){
//                     longest = long
//                 }
//
//
//                 continue
//             }
//
//             if (numsMap.has(number - 1)){
//                 const obj = numsMap.get(number - 1)
//                 obj.max ++
//                 numsMap.set(number,obj)
//                 const long = obj.max - obj.min + 1
//                 if (long > longest){
//                     longest = long
//                 }
//             }
//
//             if (numsMap.has(number + 1)){
//                 const obj = numsMap.get(number + 1)
//                 obj.min --
//                 numsMap.set(number,obj)
//                 const long = obj.max - obj.min + 1
//                 if (long > longest){
//                     longest = long
//                 }
//             }
//         }
//     }
//     return longest
// };


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums);
    let ans = 0;
    for (let num of set) {
        if (!set.has(num - 1)) { // 向下找，不存在
            // 向上找
            let currentNum = num;
            let currentStreak = 1;
            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            ans = Math.max(ans, currentStreak);
        }
    }
    return ans;
};



nums = [1,2,4,5,3]

console.log(longestConsecutive(nums))