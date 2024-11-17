var findKthNumber = function(n, k) {
    let result = [];

    function dfs(current) {
      if (current > n) return;
      result.push(current);
      
      for (let i = 0; i <= 9; i++) {
        let next = current * 10 + i;
        if (next > n) return;
        dfs(next);
      }
    }
  
    for (let i = 1; i <= 9; i++) {
      dfs(i);
    }
  
    return result[k-1];
};




let n = 13, k = 2

let result = findKthNumber(n,k);
console.log("Res",result);
