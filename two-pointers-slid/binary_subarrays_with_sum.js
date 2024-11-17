//Good problem
var f1 = function (nums, goal) {
  if (goal < 0) {
    return 0;
  }
  let l = 0,
    r = 0,
    sum = 0,
    count = 0;
  let n = nums.length;
  while (r < n) {
    sum += nums[r];
    while (sum > goal) {
      sum -= nums[l];
      l = l - 1;
    }
    count += r - l + 1;
    r += 1;
  }
  return count;
};

function numSubarraysWithSum(nums, goal) {
  return f1(nums, goal) - f1(nums, goal - 1);
}
let nums = [1, 0, 1, 0, 1],
  goal = 2;
let ans = numSubarraysWithSum(nums, goal);

console.log("The ans is::>", ans);
