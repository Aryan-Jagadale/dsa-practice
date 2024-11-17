// USE ONLY ONCE from Array ; Array problems IMP

function printF(ind, target, ds, n, res, arr) {
  if (target === 0) {
    res.push([...ds]);
    return;
  }

  for (let i = ind; i < n; i++) {

    if (i>ind && arr[i] === arr[i-1]) {
        continue;
    }

    if (arr[i] > target) {
        break;
    }

    ds.push(arr[i]);
    printF(ind + 1, target - arr[i], ds, n, res, arr);
    ds.pop();


  }

}

function print_sub(arr, k) {
  let n = arr.length;
  let result = [];
  arr.sort((a, b) => a - b);
  let res = printF(0, k, [], n, result, arr);
  console.log(result);
}

let array = [10, 1, 2, 7, 6, 1, 5];
let len = print_sub(array, 8);
console.log("ANS::> ", len);
