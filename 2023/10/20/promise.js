/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = function(functions) {
    const resultList = []
    let alreadyFunc = 0
    return new Promise((resolve,reject)=>{
        functions.forEach((func,index)=>{
            func().then(res => {
                resultList[index] = res
                alreadyFunc++
                if(alreadyFunc === functions.length){
                    resolve(resultList)
                }
            }).catch((error) =>{
                reject(error)
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */