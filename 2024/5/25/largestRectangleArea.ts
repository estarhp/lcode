function largestRectangleArea(heights: number[]): number {
    if (heights.length === 0) {
        return 0
    }
    if (heights.length === 1) {
        return heights[heights.length - 1]
    }
    const newHeight = [0,...heights,0]
    const stack = [0]
    let res = 0
    for (let i = 1; i < newHeight.length; i++) {
        while (newHeight[i] < newHeight[stack[stack.length - 1]]) {
            const preIndex = stack.pop()
            const height = newHeight[preIndex]
            const width = i - stack[stack.length - 1] - 1
            res = Math.max(height * width,res)
        }
        stack.push(i)
    }

    return res
};

const heights = [2,4]
console.log(largestRectangleArea(heights))

