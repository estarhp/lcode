/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals: number[][]): number[][] {
    const result: number[][] = []
    intervals.sort((a,b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })
    let end = intervals[0][1]
    for (let left = 0, right = 0;right < intervals.length;) {
        while (right < intervals.length && intervals[right][0] <= end) {
            end = Math.max(intervals[right][1],end)
            right ++
        }
        result.push([intervals[left][0], end])
        left = right
        if (right < intervals.length) {
            end = intervals[right][1]
        }
    }
    return result
};

const intervals = [[1,6],[8,10],[15,18]]

console.log(merge(intervals))
