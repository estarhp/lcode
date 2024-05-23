function searchInsert(nums: number[], target: number): number {
    let left = 0,right = nums.length - 1
    if (target > nums[right]) {
        return right + 1
    }

    if (target <= nums[left]) {
        return left
    }
    while(right - left > 1) {
        const center = Math.ceil((left + right) / 2)
        if(nums[center] < target) {
            left = center
        }else {
            right = center
        }
    }

    return right
};

const nums = [1,3,5,6]

console.log(searchInsert(nums,5))