// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// const maxArea = function(height) {
//
//     let maxSize = 0
//     let j = 0
//     for (let i = 0; i < height.length - 1; i++) {
//         let max = 0
//         let min = 0
//         let currentMin  = 0
//         let currentMax = 0
//         const curHeight = height[i]
//         for (j = i + 1; j < height.length; j++){
//             const nextHeight = height[j]
//             if ( nextHeight > curHeight){
//                 max = j
//             }else {
//                 const minSize = nextHeight * (j - i)
//                 if ( minSize > currentMin){
//                     currentMin = minSize
//                     min = j
//                 }
//             }
//         }
//
//
//         if (max > min){
//             currentMax = (max - i) * curHeight
//         }else {
//             currentMax = Math.max((max - i) * curHeight,currentMin)
//         }
//
//         if (currentMax > maxSize) {
//             maxSize = currentMax
//         }
//     }
//
//     return maxSize
// };

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let maxSize = 0

    let left = 0;
    let right = height.length;

    while(left < right) {
        let currentMax = 0
        const leftHeight = height[left]
        const rightHeight = height[right]
        const  currentLeft = leftHeight
        const currentRight  = rightHeight
        if (currentLeft > leftHeight) {
            left ++
            continue
        }
        if (currentRight > rightHeight) {
            right --
            continue
        }
        if (leftHeight < rightHeight ) {
            currentMax = (right - left) * leftHeight
            left ++
        }else {
            currentMax = (right - left) * rightHeight
            right --
        }

        if (currentMax > maxSize) maxSize = currentMax
    }

    return maxSize

};

console.log(maxArea([1,2]))

