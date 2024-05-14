/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height: number[]): number {
    let sum = 0,heightNum = 1,max = 0, min = height[0],temp = 0
    height.forEach((number) => {
        if ( number > max ) {
            max = number
        }
        if (number < min) {
            min = number
        }
    })
    heightNum = min + 1;
    while (heightNum <= max) {
        for (let index = 0; index < height.length; index++) {
            if (!temp && height[index] >= heightNum) {
                continue
            }
            if (height[index] < heightNum) {
                if (!temp && index > 0 && height[index - 1] >= heightNum) {
                    temp++; //首个可以注水的位置
                }else if (temp) {
                    temp ++ //后续接着注水的位置
                }
            }
            if (temp && height[index + 1] >= heightNum) {
                sum += temp
                temp = 0
                index ++
            }
        }
        temp = 0
        heightNum ++
    }
    return sum;
};

const height = [4,2,3];

console.log(trap(height))

