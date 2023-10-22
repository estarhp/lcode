/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */

Function.prototype.callPolyfill = function(context, ...args) {
    context ||= window;
    context.__proto__.fn = this;
    const result = context.fn(...args);
    delete context.__proto__.fn;
    return result;
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */