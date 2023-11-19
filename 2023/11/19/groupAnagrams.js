/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const resultArray = []
    const codeMap = new Map()

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i]
        let letterCount = new Array(26).fill(0);
        for (let j = 0; j < str.length ; j++) {
            let charCode = str.charCodeAt(j);

            letterCount[charCode - 97]++;

        }
        const arrStr = letterCount.join()
        if (codeMap.has(arrStr)){
            const index = codeMap.get(arrStr)
            resultArray[index].push(str)
            continue
        }
        codeMap.set(arrStr,resultArray.length)
        resultArray.push([str])
    }


    return resultArray

};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(groupAnagrams(strs))
