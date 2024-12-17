function wordBreak(s: string, wordDict: string[]): boolean {
    const dp = new Array(s.length + 1).fill(false)

    dp[0] = true

    for (let i = 1; i < s.length + 1; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            const word = wordDict[j]
            // 过长
            if(word.length > i) {
                continue
            }

            if(dp[i - word.length]){
                if(word === s.substring(i - word.length,i)) {
                    dp[i] = true
                    break
                }

            }
        }
    }
    console.log(dp)
    return dp[s.length]
};


const s = "leetcode", wordDict = ["leet","code"]

console.log(wordBreak(s, wordDict))