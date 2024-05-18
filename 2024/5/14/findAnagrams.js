"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findAnagrams = function (s, p) {
    const map = new Map(), result = [], length = p.length;
    for (const char of p) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        }
        else {
            map.set(char, 1);
        }
    }
    let left = 0, right = 0, changeLength = length;
    while (right < s.length) {
        const R = s[right];
        if (map.has(R)) {
            map.set(R, map.get(R) - 1);
            changeLength--;
        }
        if (changeLength === 0) {
            let push = true;
            for (const [_, value] of map) {
                if (value !== 0) {
                    push = false;
                    break;
                }
            }
            if (push) {
                result.push(left);
            }
        }
        if (right - left === length - 1) {
            const L = s[left];
            if (map.has(L)) {
                map.set(L, map.get(L) + 1);
                changeLength++;
            }
            left++;
        }
        right++;
    }
    return result;
};
const p = "abc";
const s = "cbaebabacd";
console.log(findAnagrams(s, p));
//# sourceMappingURL=findAnagrams.js.map