function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const n = nums1.length
    const m = nums2.length
    const left = Math.floor((m + n + 1) / 2)
    const right = Math.floor((m + n + 2)/ 2)
    return (getKth(nums1,nums2,left) + getKth(nums1,nums2,right)) / 2

};

function getKth(nums1: number[],nums2: number[],k: number): number {
    const len1 = nums1.length
    const len2 = nums2.length
    if (len1 > len2) {
        return getKth(nums2,nums1,k)
    }
    if (len1 === 0) {
        return nums2[k - 1]
    }
    if (k === 1) {
        return Math.min(nums2[0],nums1[0])
    }
    const i = Math.min(len1,Math.floor(k / 2)) - 1
    const j = Math.min(len2,Math.floor(k / 2)) - 1
    if (nums1[i] < nums2[j]) {
        return getKth(nums1.slice(i + 1,len1),nums2,k - i - 1)
    }
    return getKth(nums1,nums2.slice(j + 1,len2),k - j - 1)
}

const nums1 = [1,2]
const nums2 = [3,4]
console.log(findMedianSortedArrays(nums1,nums2))