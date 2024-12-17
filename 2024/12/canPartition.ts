function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((sum, num) => sum + num, 0)

    if(sum % 2 !== 0) {
        return false
    }

    const canpacity = sum / 2

    const dp = new Array(nums.length + 1).fill(0).map(() => new Array(canpacity + 1).fill(false))

    dp[0][0] = true

    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = true
        for (let j = 0; j <= canpacity; j++) {
            if(dp[i-1][j - nums[i - 1]]) {
                dp[i][j] = true

                if(j === canpacity) {
                    return true
                }
            }

            if(dp[i-1][j]) {
                dp[i][j] = true
            }


        }


    }

    return dp[nums.length][canpacity]

};