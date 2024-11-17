function isPalindrome(str, start, end) {
  while (start <= end) {
    if (str[start++] !== str[end--]) {
      return false;
    }
  }
  return true;
}

function solve(str, index, n, result, ds) {
  if (index === n) {
    result.push([...ds]);
    return;
  }
  for (let i = index; i < n; i++) {
    if (isPalindrome(str, index, i)) {
        ds.push(str.substring(index,i+1));
        solve(str,i+1,n,result,ds)
        ds.pop()
    }
  }
}

function print_sub(str) {
  let result = [];
  let n = str.length;
  let ds = [];

  solve(str, 0, n, result, ds);

  return result;
  
}

let str = "aabb";
let len = print_sub(str);
console.log("ANS::> ", len);
