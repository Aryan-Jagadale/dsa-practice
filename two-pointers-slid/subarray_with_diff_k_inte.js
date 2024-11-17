var subarraysWithKDistinct = function (nums, k) {
  let left = 0,
    right = 0,
    count = 0;
  let hashMap = new Map();
  let n = nums.length;
  while (right < n) {
    hashMap.set(nums[right], (hashMap.get(nums[right]) || 0) + 1);
    while (hashMap.size > k) {
        hashMap.set(nums[left],hashMap.get(nums[left])-1);
        if (hashMap.get(nums[left] )=== 0) {
            hashMap.delete(nums[left])
        }
        left=left+1;
    }
    count = count + right-left+1;
    right = right+1

  }
  return count;
};

function main(nums, k) {
  let lessthank = subarraysWithKDistinct(nums, k);
  let leessthankminusone = subarraysWithKDistinct(nums,k-1)
  return lessthank-leessthankminusone;
}

let nums = [1, 2, 1, 2, 3];
let k = 2;

const answer = main(nums, k);
console.log("The ans is::>", answer);
