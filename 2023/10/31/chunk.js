/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function(arr, size) {
    const resultArr = []
   while (arr.length){
        resultArr.push(arr.splice(0,size))
    }
    return  resultArr
};

console.log(chunk([8,5,3,2,6],6));