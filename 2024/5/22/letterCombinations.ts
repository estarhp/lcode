const dicts = {
    2:'abc',
    3:'def',
    4:'ghi',
    5:'jkl',
    6:'mno',
    7:'pqrs',
    8:'tuv',
    9:'wxyz'
} as {[key: number]: string}

const letterCombinations = function (digits: string): string[] {
    if (!digits.length) {
        return []
    }
    const result: string[] = []
    const state: string = ''
    backtrack(digits,state,result,0)
    return result
};

function backtrack(digits: string,state: string,result: string[],i: number) {
    if (state.length === digits.length) {
        result.push(state)
        return
    }
    const index = parseInt(digits[i])
    for (const char of dicts[index]) {
        state += char
        backtrack(digits, state, result, i + 1)
        state = state.slice(0,-1)
    }
}

console.log(letterCombinations("23"))



