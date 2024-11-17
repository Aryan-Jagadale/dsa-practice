// Subset sum 1 ::> All the subset sum

function printF(ind, sum, n, res, arr) {
  if (ind >= n) {
    res.push(sum);
    return;
  }


  printF(ind+1, sum +=arr[ind], n, res, arr);

  printF(ind+1, sum -=arr[ind], n, res, arr);

  res.sort((a,b)=>a-b);
  
}

function print_sub(arr) {
  let n = arr.length;
  let result = [];
  let sum = 0;
  let res = printF(0, sum, n, result, arr);
  console.log(result);
}

let array = [3, 1, 2];
let len = print_sub(array);
console.log("ANS::> ", len);
