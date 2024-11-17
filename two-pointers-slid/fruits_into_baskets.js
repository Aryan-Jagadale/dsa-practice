// Max length subarray with at most 2 types of numbers

function main(arr) {
  let maxLen = 0;
  let left = 0;
  let n = arr.length;
  let basketSize = new Map();

  for (let right = 0; right < n; right++) {
    basketSize.set(arr[right], (basketSize.get(arr[right]) || 0) + 1);
    // while (basketSize.size > 2) {

    //   basketSize.set(arr[left], basketSize.get(arr[left]) - 1);

    //   if (basketSize.get(arr[left]) === 0) {
    //     basketSize.delete(arr[left]);
    //   }

    //   left++;
    // }
    if (basketSize.size > 2) {
      basketSize.set(arr[left], basketSize.get(arr[left]) - 1);
      if (basketSize.get(arr[left]) === 0) {
        basketSize.delete(arr[left]);
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

let arr = [3, 1, 2, 2, 2, 2];
let ans = main(arr);
console.log("The ans is::>", ans);
