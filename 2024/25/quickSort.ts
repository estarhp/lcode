const swap = (nums: number[], i: number, j: number) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const partition = (nums: number[], left: number, right: number) => {
    let i = left, j = right;

    while (i < j) {
        while (i < j && nums[j] > nums[left]) {
            j --
        }

        while (i < j && nums[i] < nums[left]) {
            i ++
        }

        swap(nums, i, j);
    }
    swap(nums, i, left)

    return i
}

const quickSort = (nums: number[], left: number, right: number) => {
     if(left >= right) return

    const pivot = partition(nums, left, right)

    quickSort(nums, left, pivot - 1)
    quickSort(nums, pivot + 1, right)

}



const nums = [5,3,4,8,9,10]

quickSort(nums, 0, nums.length - 1)

console.log(nums)