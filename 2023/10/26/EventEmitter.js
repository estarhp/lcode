class EventEmitter {

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */

    constructor() {
        this.emitThing = {}
    }
	subscribe(eventName, callback) {
       if (this.emitThing[eventName]){
           this.emitThing[eventName].push(callback)
       }else {
           this.emitThing[eventName] = [callback]
       }
        const index = this.emitThing[eventName].length - 1
        return {
            unsubscribe: () => {
               delete  this.emitThing[eventName].splice(index,1)
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
	emit(eventName, args = []) {
        if (this.emitThing[eventName]){
            return this.emitThing[eventName].map((func,index) => {
               return  func(...args)
            })
           
        }
       return []
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */