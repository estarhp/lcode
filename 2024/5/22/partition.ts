function partition(s: string): string[][] {
    const result: string[][] = []
    const temp: string[] = []
    for (let i = 1; i <= s.length; i++) {
        backtrack(s,result,0,i,temp)
    }

    return  result
};

function backtrack(s: string,result: string[][],i: number,j: number,temp: string[]) {
    const state = s.slice(i,j)
    if (state.length) {
        let left = 0,right = state.length - 1
        while(left < right) {
            if (state[left] === state[right]) {
                left ++
                right --
            }else {
                return
            }
        }
    }
    if (j === s.length) {
        temp.push(state)
        result.push([...temp])
        temp.pop()
        return;
    }
    for (let k = j + 1;k <= s.length; k++) {
        temp.push(state)
        backtrack(s,result,j,k,temp)
        temp.pop()
    }
}

const s = "aab"

console.log(partition("aab"))