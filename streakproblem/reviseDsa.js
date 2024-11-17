function main(num) {
  console.log(arr);
  let low = 1;
  // let n = arr.length;
  let high = num;
  while (low <= high) {
    let mid = Math.floor((low+high)/2);
    // console.log(mid);
    let value  = mid*mid;

    if (value <= num) {
      low = mid+1
    } else {
      high=mid-1
    }
  }

  return high

  
}

let arr = 36;
let ans = main(arr);
console.log("The peak is at index:", ans);



