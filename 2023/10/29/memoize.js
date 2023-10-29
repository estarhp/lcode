/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const memoryArg = []
    const memoryValue = []

    return function(...args) {
        let ArgIndex = undefined
        memoryArg.forEach((item,index) => {
            if (JSON.stringify(item) === JSON.stringify(args)) ArgIndex = index
        })
        if (ArgIndex !== undefined) return memoryValue[ArgIndex]
        const result = fn(...args)
        memoryArg.push(args)
        memoryValue.push(result)
        return result
    }
}

const func = memoize((a, b)=> {
    return a + b
})




/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */