class Solution {
    // Check if it's safe to place a queen at board[row][col]
    isSafe1(row, col, board, n) {
      let dupRow = row;
      let dupCol = col;
  
      // Check the upper diagonal on the left side
      while (row >= 0 && col >= 0) {
        if (board[row][col] === 'Q') return false;
        row--;
        col--;
      }
  
      // Reset row and col for checking the left side
      col = dupCol;
      row = dupRow;
      while (col >= 0) {
        if (board[row][col] === 'Q') return false;
        col--;
      }
  
      // Reset row and col for checking the lower diagonal on the left side
      row = dupRow;
      col = dupCol;
      while (row < n && col >= 0) {
        if (board[row][col] === 'Q') return false;
        row++;
        col--;
      }
  
      return true;
    }
  
    // Solve the N-Queen problem using backtracking
    solve(col, board, ans, n) {
      if (col === n) {
        ans.push([...board]);
        return;
      }

      // console.log(board);
      
  
      for (let row = 0; row < n; row++) {
        if (this.isSafe1(row, col, board, n)) {

          board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);
          
          this.solve(col + 1, board, ans, n);
          board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1);
        }
      }
    }
  
    // Main function to initiate solving N-Queens
    solveNQueens(n) {
      let ans = [];
      let board = new Array(n).fill('.'.repeat(n));
      console.log(board);
      
      this.solve(0, board, ans, n);
      return ans;
    }
  }
  
  // Usage
  const n = 4; // 4x4 grid and 4 queens
  const obj = new Solution();
  const ans = obj.solveNQueens(n);
  ans.forEach((arrangement, index) => {
    console.log(`Arrangement ${index + 1}`);
    arrangement.forEach(row => console.log(row));
    console.log('');
  });
  