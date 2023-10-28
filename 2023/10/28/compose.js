/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function(functions) {
    return function(x) {
        let sum = x
        functions.reverse().forEach((item) => {
            sum = item(sum)
        })
        return sum
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */