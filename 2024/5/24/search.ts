function search(nums: number[], target: number): number {
    let left = 0,right = nums.length - 1
    while(left <= right) {
        if (nums[left] === target) {
            return left
        }
        if (nums[right] === target) {
            return right
        }
        const center = Math.floor((left + right) / 2)

        if (nums[center] === target) {
            return center
        }

        if (nums[center] > nums[left]) {
            if (target < nums[center] && target > nums[left]) {
                right = center - 1
            }else {
                left = center + 1
            }
        }else {
            if (target > nums[center] && target < nums[right]) {
                left = center + 1
            } else {
                right = center - 1
            }
        }

    }

    return -1
};

const nums =  [4,5,6,7,0,1,2]
console.log(search(nums,0))