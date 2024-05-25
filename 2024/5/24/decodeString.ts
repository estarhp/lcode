function decodeString(s: string): string {
    const kStack: number[] = []
    const resStack: string[] = []
    let k = 0
    let res = ''
    for (const char of s) {
        if (char === '[') {
            kStack.push(k)
            resStack.push(res)
            k = 0
            res = ''
        }
        else if(char === ']') {
            const curk = kStack.pop()
            let temp = ''
            for (let i = 0; i < curk; i++) {
                temp += res
            }
            res = resStack.pop() + temp
        }
        else if( '0' <= char && char <= '9') {
            k = parseInt(char) + k * 10
        }
        else {
            res += char
        }
    }

    return res
};

const s = "3[a2[c]]"

console.log(decodeString(s))

