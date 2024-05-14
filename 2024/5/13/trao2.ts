const trap = function (height: number[]): number {
    let sum = 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    while(left < right) {
        leftMax = Math.max(height[left], leftMax)
        rightMax = Math.max(height[right],rightMax)
        if (height[left] < height[right]) {
            sum += leftMax - height[left]
            left ++
        }else {
            sum += rightMax - height[right]
            right --
        }
    }
    return sum;
}

const height = [0,1,0,2,1,0,1,3,2,1,2,1]

console.log(trap(height))
