function searchRange(nums: number[], target: number): number[] {
    let left = 0,right = nums.length  - 1
    let hasResult = false
    if (nums[left] === target) {
       right = left
        hasResult = true
    }else if(nums[right] === target) {
        left = right
        hasResult = true
    }else {
        while (right - left > 1) {
            const center = Math.floor((left + right) / 2)
            if (nums[center] === target) {
                left = center
                right = center
                hasResult = true
                break
            }
            if (nums[center] > target) {
                right = center
            }else {
                left = center
            }
        }
    }

    if (!hasResult) {
        return [-1,-1]
    }
    while (true) {
        if (nums[left - 1] === target) {
            left --
        }
        if (nums[right + 1] === target) {
            right ++
        }
        if (nums[left - 1] !== target && nums[right + 1] !== target) {
            break
        }

    }

    return [left,right]
};

const nums = [5,7,7,8,8,10]

console.log(searchRange(nums,8))