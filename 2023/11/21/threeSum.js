/**
 * @param {number[]} nums
* @return {number[][]}
*/
const threeSum = function(nums) {
        const result = []
        nums.sort((a, b) => a - b );
        for(let i = 0; i < nums.length ; i++) {
            const first  = nums[i];
            if (first > 0 ) break; //无法出现合格的结果
            if (i > 0 && first === nums[i - 1]) continue; // 与上一次结果重复
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = first + nums[left] + nums[right];
                if (sum === 0) {
                    result.push([first,nums[left],nums[right]]);
                    while(nums[left] === nums[left + 1]) {
                        left ++;
                    }
                    while(nums[right] === nums[right - 1]) {
                        right --;
                    }
                    left ++;
                    right --;
                }else if(sum > 0) {
                    right --;
                }else {
                    left ++;
                }
                
            }
        }
        
        return result

};

const nums = [-1,0,1,2,-1,-4]

console.log(threeSum(nums))