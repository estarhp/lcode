function dailyTemperatures(temperatures: number[]): number[] {
    const array: number[] = []
    const answer = new Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length;) {
        if (!array.length || temperatures[array[array.length - 1]] >= temperatures[i]) {
            array.push(i)
            i++
        } else {
            const preIndex = array.pop()
            answer[preIndex] = i - preIndex
        }
    }

    return answer
};
const temperatures =
    [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures))