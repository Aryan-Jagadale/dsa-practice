function printF(ind, arr, result) {
  if (ind === arr.length) {
    result.push([...arr]);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    [arr[ind], arr[i]] = [arr[i], arr[ind]];
    printF(ind + 1, arr, result);
    [arr[ind], arr[i]] = [arr[i], arr[ind]];
  }
}

function print_sub(arr) {
  let result = [];

  printF(0, arr, result);

  console.log(result);
}

let array = [1, 2, 3];
let len = print_sub(array);
console.log("ANS::> ", len);










