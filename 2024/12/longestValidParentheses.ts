const enum BRACKET {
    LEFT= "(",
    RIGHT= ")"
}



function longestValidParentheses(s: string): number {
   const dp = new Array(s.length).fill(0)
    let max = 0

    for (let i = 1; i < s.length; i++) {
        const char = s[i];

        if(char === BRACKET.LEFT) {
            dp[i] = 0
            continue
        }

        if(char === BRACKET.RIGHT && s[i - 1] === BRACKET.RIGHT) {
          if(s[i - dp[i - 1] - 1] === BRACKET.LEFT) {
              dp[i] = 2 + dp[i - 1] + (dp[i - dp[i - 1] - 2] ?? 0)
          }
        }

        if(char === BRACKET.RIGHT && s[i - 1] === BRACKET.LEFT) {
           dp[i] = 2 + (dp[i - 2] ?? 0)
        }

        max = Math.max(max, dp[i])
    }

    console.log(dp)


    return max
};

const s = "()(())"

console.log(longestValidParentheses(s))