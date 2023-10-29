/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function(fn, t) {
    let timeOut = undefined

    return function(...args) {
        if (timeOut) clearTimeout(timeOut)
        timeOut = setTimeout(()=> {
              fn(...args)
         },t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */