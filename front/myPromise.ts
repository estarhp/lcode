const enum STATUS {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected',
}

class MyPromise {
    status: STATUS = STATUS.PENDING
    value: unknown
    reason: unknown
    onResolveCallbacks: (() => unknown)[]= []
    onRejectCallbacks: (() => unknown)[] = []


    constructor(fn: (resolve: (value: unknown) => void, reject: (reason: unknown) => void) => void) {

        const resolve = (value: unknown) => {
              if (this.status === STATUS.PENDING) {

                  this.status = STATUS.FULFILLED
                  this.value = value
                  this.onResolveCallbacks.forEach((v) => v())
              }
        }

        const reject = (reason: unknown) => {
            if (this.status === STATUS.PENDING) {
                this.status = STATUS.REJECTED
                this.reason = reason
                this.onRejectCallbacks.forEach((v) => v())

            }

        }

        try {fn(resolve,reject)}
        catch (error) {reject(error)}
    }

    then(onResolve: (value: unknown) => {}, onReject: (reason: unknown) => {}) {
         const promise2 = new MyPromise((resolve, reject) => {

             if(this.status === STATUS.FULFILLED) {
                 queueMicrotask(() => {
                     const x = onResolve(this.value)
                     resolvePromise(promise2, x, resolve, reject)
                 })
                 return
             }

             if(this.status === STATUS.REJECTED) {
                 queueMicrotask(() => {
                     const x = onResolve(this.reason)
                     resolvePromise(promise2, x, resolve, reject)
                 })
                 return;
             }

             if(this.status === STATUS.PENDING) {
                 this.onResolveCallbacks.push(() => {
                     queueMicrotask(() => {
                         const x = onResolve(this.value)
                         resolvePromise(promise2, x, resolve, reject)
                     })
                 })
                 this.onRejectCallbacks.push(() => {
                    queueMicrotask(() => {
                        const x = onReject(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    })
                 })
             }
         })

        return promise2
    }

}

function resolvePromise(promise2: MyPromise,x: unknown,resolve: (value: unknown) => void, reject: (reason: unknown) => void) {
     if(x === promise2) {
         // reject报错
         return reject(new TypeError('Chaining cycle detected for promise'));
     }

     let called = false


    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {

            let then = (x as {then: () => void}).then

            if(typeof then === 'function') {
                then.call(x, (y: unknown) => {
                    if (called) {
                        return
                    }

                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, (err: unknown) => {
                    if (called) {
                        return
                    }

                    called = true
                    reject(err)
                })
                return
            }
            resolve(x)

        } catch (error) {
            reject(error)
        }

        return
    }
    resolve(x)
}