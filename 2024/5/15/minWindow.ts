/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s: string, t: string): string {
    let minString = ''
    const map = new Map()
    for (const char of t) {
        if (map.has(char)) {
            map.set(char,map.get(char) + 1)
        } else {
            map.set(char,1)
        }
    }
    const tempMap = new Map()
    let left = 0, right = 0, length = 0, constLength = map.size
    while (right < s.length) {
        if (length < constLength) {
            const R = s[right]
            if (map.has(R)) {
                if (tempMap.has(R)) {
                    tempMap.set(R,tempMap.get(R) + 1)
                }else {
                    tempMap.set(R, 1)
                }

                if (tempMap.get(R) === map.get(R)) {
                    length ++
                }
            }
        }
        while(length === constLength) {
            const L = s[left]
            if (tempMap.has(L)) {
                if (tempMap.get(L) === map.get(L)) {
                    length --
                }
                tempMap.set(L,tempMap.get(L) - 1)
            }
            if (minString === '' || minString.length > right - left + 1) {
                minString = s.slice(left, right + 1)
            }
            left ++
        }
        right ++
    }
    return minString
};

console.log(minWindow("aa","aa"))