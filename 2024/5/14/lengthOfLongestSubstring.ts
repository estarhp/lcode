/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s: string): number {
    let maxLength = 0, left = 0,right = 0,map: {[key: string]:number} = {}
    while(right < s.length) {
        const R  = s[right]
        if (map[R]) {
            map[R] ++
        }else {
            map[R] = 1
        }

        while (map[R] > 1) {
            const L = s[left]
            map[L] --
            left ++
        }
        maxLength =  Math.max(maxLength,right - left + 1)
        right ++
    }

    return maxLength

};
console.log(lengthOfLongestSubstring("bbbbb"))
