function solve(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === ".") {
        for (
          let c = "1";
          c <= "9";
          c = String.fromCharCode(c.charCodeAt(0) + 1)
        ) {
          //   console.log("c",c);
          if (isValid(board, row, col, c)) {
            board[row][col] = c;
            if (solve(board) === true) {
              return true;
            } else {
              board[row][col] = ".";
            }
          }
        }
      }
      return false;
    }
  }
  return true;
}

function isValid(board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === c) {
      return false;
    }
    if (board[row][i] === c) {
      return false;
    }
    if (board[3*(row / 3)+i/3][3 * (col /3) + i% 3] === c) {
        return false;
    }
  }
  return true
}

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solve(board);



console.log(board);

