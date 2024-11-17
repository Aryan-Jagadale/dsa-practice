var longestOnes = function (nums, k) {
  let maxLen = 0,
    l = 0,
    r = 0,
    zeros = 0;
  let n = nums.length;
  while (r < n) {
    if (nums[r] === 0) {
      zeros += 1;
    }
    if (zeros > k) {
      if (nums[l] === 0) {
        zeros -= 1;
      }
      l++;
    }
    if (zeros <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }
    r++;
  }
  return maxLen;
};

let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
let ans = longestOnes(arr, k);
console.log("Ans::>", ans);
