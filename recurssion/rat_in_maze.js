function findPathHelper(i, j, a, n, ans, move, vis, di, dj) {
  if (i === n - 1 && j === n - 1) {
    ans.push(move);
    return;
  }
  let str = "DLRU";
  for (let ind = 0; ind < 4; ind++) {
    let nexti = i+di[ind];
    let nextj = j+dj[ind];
    if (nexti >= 0 && nextj >= 0 && nexti < n && nextj < n && !vis[nexti][nextj] && a[nexti][nextj] == 1) {
        vis[i][j] = 1;
        findPathHelper(nexti, nextj, a, n, ans, move + str[ind], vis, di, dj);
        vis[i][j] = 0;

    }


  }

  //   vis[i][j] = 1;

  //   // Downward
  //   if (i + 1 < n && !vis[i + 1][j] && a[i + 1][j] === 1) {
  //     findPathHelper(i + 1, j, a, n, ans, move + "D", vis);
  //   }
  //   //Left
  //   if (j - 1 >= 0 && !vis[i][j - 1] && a[i][j - 1] === 1) {
  //     findPathHelper(i, j - 1, a, n, ans, move + "L", vis);
  //   }
  //   //Right
  //   if (j + 1 < n && !vis[i][j + 1] && a[i][j + 1] === 1) {
  //     findPathHelper(i, j + 1, a, n, ans, move + "R", vis);
  //   }
  //   //up
  //   if (i - 1 >= 0 && !vis[i - 1][j] && a[i - 1][j] === 1) {
  //     findPathHelper(i - 1, j, a, n, ans, move + "U", vis);
  //   }

  //   vis[i][j] = 0;
}

function findPath(m, n) {
  const ans = [];
  const vis = Array.from({ length: n }, () => Array(n).fill(0));
  let di = [1, 0, 0, -1];
  let dj = [0, -1, 1, 0];

  if (m[0][0] === 1) {
    findPathHelper(0, 0, m, n, ans, "", vis, di, dj);
  }

  return ans.length === 0 ? -1 : ans;
}

const n = 4;
const m = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

const result = findPath(m, n);
console.log(result);
