function arrayProductExcludingCurrent(numbers) {
  let n = numbers.length;
  let res = [];

  let left = new Array(n);
  left[0] = numbers[0];

  for (let i = 1; i < n; i++) {
    left[i] = left[i-1] * numbers[i-1]
  }

  let right = 1;

  for (let i = n - 1; i >= 0; i--) {
    res[i] = left[i] * right;
    right *= numbers[i];
  }
  

  return res;
}

console.log(arrayProductExcludingCurrent([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]

