function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [],state: number[] = []
    let sum = 0
    backtrack(candidates,state,sum,result,target,0)
    return result
};

function backtrack(candidates: number[],state: number[],sum: number,result: number[][],target: number,j: number) {
    if (sum > target){
        return
    }
    if (sum === target) {
        result.push([...state])
    }
    for (let i = j; i < candidates.length; i++) {
        state.push(candidates[i])
        sum += candidates[i]
        backtrack(candidates,state,sum,result,target,i)
        state.pop()
        sum -= candidates[i]
    }
}