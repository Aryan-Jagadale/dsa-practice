function main(arr, k) {
  let lsum = 0, rsum = 0;
  let n = arr.length;
  let maxSum = 0;
  for (let i = 0; i < k ; i++) {
    lsum = lsum + arr[i];
  };
  maxSum = lsum;
  let rIndex = n-1;
  for (let i = k-1; i >= 0; i--) {
    lsum = lsum - arr[i];
    rsum = rsum + arr[rIndex];
    rIndex = rIndex -1;
    maxSum = Math.max(maxSum,lsum+rsum);
  }
  return maxSum
}

let arr = [6, 6, 1, 1, 7, 2, 1, 6, 1];
let k = 4;

let ans = main(arr, k);
console.log("Ans::>", ans);
