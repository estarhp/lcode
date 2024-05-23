/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums: number[]): number[][] {
    const result: number[][] = []
    select([],nums,0,result)
    return result
};

function select(state: number[],nums: number[],i: number,result: number[][]) {
    for (let j = i; j < nums.length; j++) {
        state.push(nums[j])
        result.push([...state])
        select(state,nums,j + 1,result)
        state.pop()
    }
}

const nums = [1,2,3]

console.log(subsets(nums))