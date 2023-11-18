/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//const twoSum = function(nums, target) {
//    const sumMap = new Map()
//    
//    nums.forEach((oneitem,oneindex) => {
//        for (let twoindex = oneindex + 1; twoindex < nums.length; twoindex++){
//            sumMap[oneitem + nums[twoindex]] =[oneindex, twoindex]
//        }
//    })
//    
//    return  sumMap[target]
//};

//
//const twoSum = function (nums, target) {
//    for (let oneindex = 0; oneindex < nums.length - 1; oneindex ++){
//        for (let twoindex = oneindex + 1; twoindex < nums.length; twoindex ++ ){
//            if (nums[oneindex] + nums[twoindex] === target){
//                return [oneindex, twoindex]
//            }
//        }
//    }
//}

//const twoSum = function (nums, target) {
//    const numsMap  = new Map()
//    
//    nums.forEach((item,index) => {
//        if (numsMap[item] !== undefined){
//            numsMap[item].push(index)
//        }else {
//            numsMap[item]  = [index]
//        }
//    })
//    for(let i = 0; i < target / 2 + 1; i++) {
//        const oneindexArray = numsMap[i]
//        const twoindexArray = numsMap[target - i]
//        if (oneindexArray !== undefined && twoindexArray !== undefined){
//            if (oneindexArray === twoindexArray){
//                return[oneindexArray[0], twoindexArray[1]]
//            }
//            return  [oneindexArray[0],twoindexArray[0]]
//        }
//    }
//}

                                                                
const twoSum = function (nums, target) {
     const numsMap = new WeakMap()
     
     for(let onenumindex = 0,twoindex; onenumindex < nums.length ; onenumindex++) {
        const onenum = nums[onenumindex]
        twoindex = numsMap[target - onenum] 
        if ( twoindex !== undefined){
         return [onenumindex, twoindex]
        }
        numsMap[onenum] = onenumindex
    }
}


const nums = [-3,4,3,90], target = 0

console.log(twoSum(nums,target))