const chars = ['(',')']
function generateParenthesis(n: number): string[] {
    const result: string[] = [],state: string = '',leftSum = 0,rightSum = 0
    backtrack(n,state,leftSum,rightSum,result)
    return result
};

function backtrack(n: number,state: string,leftSum: number, rightSum: number,result: string[]) {
    if (leftSum > n || rightSum > n || rightSum > leftSum) {
        return
    }
    if (leftSum === rightSum && rightSum + leftSum === 2 * n) {
        result.push(state)
    }
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i]
        if (i === 0) {
            leftSum ++
        }else {
            rightSum ++
        }
        state += char
        backtrack(n,state,leftSum,rightSum,result)
        state = state.slice(0,-1)
        if (i === 0) {
            leftSum --
        }else {
            rightSum --
        }
    }
}

