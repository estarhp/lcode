function maxProduct(nums: number[]): number {
    const dp = nums.map((v) => {
        return {max: v, min: v}
    })

    if(!nums.length) {
        return 0;
    }

    let max = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const number = nums[i]

        dp[i].max = Math.max(number, number * dp[i - 1].max, number * dp[i - 1].min)
        dp[i].min = Math.min(number, number * dp[i - 1].max, number * dp[i - 1].min)
        max = Math.max(max, dp[i].max)
    }

    console.log(dp)

    return max
};

const nums = [-2,3,-4]

console.log(maxProduct(nums))