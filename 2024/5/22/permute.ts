/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums: number[]): number[][] {
    const result: number[][] = []
    const selected: boolean[] = new Array(nums.length).fill(false)
    backtrack([],nums,selected,result)
    return result
};

function backtrack(state: number[],nums: number[],selected: boolean[],result: number[][]) {
    if (state.length === nums.length) {
        result.push([...state])
        return
    }
    nums.forEach((item,index) => {
        if (selected[index]) {
            return
        }else {
            state.push(item)
            selected[index] = true
            backtrack(state,nums,selected,result)
            state.pop()
            selected[index] = false
        }
    })
}

const nums = [1,2,3]
console.log(permute(nums))