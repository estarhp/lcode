/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function(fn) {
    let times = true;
	return function(...args){
       if (times){
           times = false
           return fn(...args)
       }
        return undefined
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */