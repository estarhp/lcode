const leftString: {[key: string]: string} = {
    "(": ")",
    "{": "}",
    "[": "]"
}

function isValid(s: string): boolean {
    const stack: string[]  = []
    for (const sElement of s) {
        if (leftString[sElement]) {
            stack.push(sElement)
        }else {
            if (stack.length && leftString[stack[stack.length - 1]] === sElement ) {
                stack.pop()
            }else {
                return false
            }
        }
    }
    return !stack.length
};

const s = "()[]{}"
console.log(isValid(s))

