// function calc(arr, midValue) {
//   let value = arr.reduce((acc, curr) => {
//     let ans = Math.ceil(curr / midValue);
//     acc += ans;

//     return acc;
//   }, 0);

//   return value;
// }

function main(n) {
  let ans = [];
  let board = [];
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill(".");
  }
  
  solve(0, board, ans, n);
  return ans
}

function isSafe(row, col, board, n) {
  // Check upper diagonal
  for (let i = 0; i <= Math.min(row, col); i++) {
      if (board[row - i][col - i] === 'Q') {
          return false;
      }
  }

  // Check left side
  for (let i = 0; i < col; i++) {
      if (board[row][col - i - 1] === 'Q') {
          return false;
      }
  }

  // Check lower diagonal
  for (let i = 0; i < Math.min(n - row, col + 1); i++) {
      if (board[row + i][col - i] === 'Q') {
          return false;
      }
  }

  return true;
}

function solve(col, board, ans, n) {
  if (col === n) {
    // console.log("::>",board);
    let clone = structuredClone(board)
    ans.push(clone);
    return;
  }

  for (let row = 0; row < n; row++) {
    if (isSafe(row, col, board, n)) {
      // board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);
      board[row][col] = "Q";

      solve(col + 1, board, ans, n);
      // board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1);

      board[row][col] = ".";
    }
  }
}

// function test(ind, arr, target, ans, ds) {
//   // if (ind === arr.length) {
//   //   if (target === 0) {
//   //     ans.push([...ds])
//   //   }
//   //   return;
//   // }
//   // if (arr[ind] <= target) {
//   //   ds.push(arr[ind]);
//   //   test(ind, arr, target - arr[ind], ans, ds);
//   //   ds.pop();
//   // }
//   // test(ind + 1, arr, target, ans, ds);

//   if (target === 0) {
//     ans.push([...ds]);
//     return;
//   }
//   for (let i = ind; i < arr.length; i++) {
//     if (i > ind && arr[i] === arr[i - 1]) {
//       continue;
//     }
//     if (arr[i] > target) {
//       break;
//     }
//     ds.push(arr[i]);
//     test(i + 1, arr, target - arr[i], ans, ds);
//     ds.pop();
//   }
// }

// let arr = Array.from(new Set([10,1,2,7,6,1,5].sort((a,b)=>a-b)));

// let arr = [10,1,2,7,6,1,5].sort((a,b)=>a-b)
const binarySearch = main(4);
console.log("::>", binarySearch);
