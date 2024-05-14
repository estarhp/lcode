//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s: string, p: string): number[] {
    const map: Map<string, number> = new Map(), result: number[] = [], length = p.length
    for (const char of p) {
        if (map.has(char)) {
            map.set(char,map.get(char) + 1)
        } else {
            map.set(char,1)
        }
    }
    let left = 0, right = 0, changeLength = length
    while (right < s.length) {
        const R = s[right]
        if (map.has(R)) {
            map.set(R,map.get(R) - 1)
            changeLength--
        }
        if (changeLength === 0) {
            let push  = true
            for (const [_,value] of map) {
                if (value !== 0) {
                    push = false
                    break
                }
            }
            if (push) {
                result.push(left)
            }
        }

        if (right - left === length - 1) {
            const L = s[left]
            if (map.has(L)) {
                map.set(L, map.get(L) + 1)
                changeLength ++
            }
            left++
        }
        right++
    }

    return result;

};

const p = "abc"
const s = "cbaebabacd"
console.log(findAnagrams(s, p))
//leetcode submit region end(Prohibit modification and deletion)
