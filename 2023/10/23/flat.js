/**
* @param {Array} arr
* @param {number} n
* @return {Array}
*/
const flat = function (arr, n) {
    if (n === 0) return arr
    let flatArray = []
    for (let i = n; i > 0; i--){
            arr.forEach((item,outerIndex)=>{
                if (Array.isArray(item)){
                    item.forEach((item) => {
                        flatArray.push(item)
                    })
                }else {
                    flatArray.push(item)
                }
            })
        if (i > 1){
            arr = flatArray
            flatArray = []
        }
    }
    
    return flatArray
};


// 递归超时
//const flat = function (arr, n) {
//    if (n === 0) return arr
//    const flatArray = []
//    if (n > 0){
//        arr.forEach((item,outerIndex)=>{
//            if (Array.isArray(item)){
//                item.forEach((item) => {
//                    flatArray.push(item)
//                })
//            }else {
//                flatArray.push(item)
//            }
//        })
//        return flat(flatArray,  n-1)
//    }
//};

const arr =  [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

console.log(flat(arr, 2))




