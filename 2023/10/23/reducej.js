/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
      nums.forEach((item)=>{
          init = fn(init,item)
      })
    return init
};