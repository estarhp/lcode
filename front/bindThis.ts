Function.prototype.call = function(context) {
    context = context || window

    const symbol =  Symbol()

    context[symbol] = this

    const args = [...arguments].slice(1)

    context[symbol](...args)

    delete context[symbol]
}

Function.prototype.apply = function(context, ...args) {
    context = context || window

    const symbol =  Symbol()

    context[symbol] = this

    context[symbol](...args)

    delete context[symbol]
}

Function.prototype.bind = function (context) {
    let arg = Array.prototype.slice.call(arguments, 1);
    context = context || window

    const fn = this
    return function() {
        let arg2 = Array.prototype.slice.call(arguments, 1);
        this.apply(context, arg.concat(arg2))
    }

}

