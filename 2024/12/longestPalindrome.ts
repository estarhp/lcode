function longestPalindrome(s: string): string {
   const dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(false))


    let max = s[0]

    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i < s.length; i++) {

              if(i > j) continue

              if(s[i] === s[j] && ((j - i + 1 < 3) || dp[i + 1][j - 1])) {
                  dp[i][j] = true

                  if(j - i + 1 > max.length) {
                      max = s.slice(i, j + 1)
                  }
              }else  {
                  dp[i][j] = false
              }
        }
    }

    return max
};

const s = "babad"

console.log(longestPalindrome(s))