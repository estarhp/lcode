function findMin(nums: number[]): number {
    let left = 0 ,right = nums.length - 1
    if (nums.length === 1) {
        return nums[left]
    }
    if (nums[left] < nums[right]) {
        return nums[left]
    }
    function judge(number: number) {
        if (number + 1 >= nums.length) {
            return nums[number - 1] > nums[number]
        }
        return nums[number - 1] > nums[number] && nums[number + 1] > nums[number];
    }
    while(left <= right) {
        const center = Math.floor((left + right) / 2)
        if (judge(center)) {
            return nums[center]
        }
        if (judge(left)) {
            return nums[left]
        }
        if (judge(right)) {
            return nums[right]
        }
        if (nums[center] > nums[left]) {
            left = center + 1
        }else {
            right = center - 1
        }
    }
};


