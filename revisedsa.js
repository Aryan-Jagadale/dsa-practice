var insert = function(intervals, newInterval) {
  let stack = [];
  let n = intervals.length;
  let merged = newInterval;
  for (let i = 0; i < n; i++) {
      let curr = intervals[i];
      if (curr[1] < merged[0]) {
          stack.push(curr);
      } else if (curr[0] > merged[1]) { 1 > 15
          stack.push(merged);
          stack.push(...intervals.slice(i));
          return stack;
      } else {
          merged[0] = Math.min(merged[0], curr[0]);
          merged[1] = Math.max(merged[1], curr[1]);
      }
  }
  stack.push(merged);  
  return stack;
};


console.log(insert([[1,2],[3,5],[6,10],[11,12],[13,16]], [8,15]));
// Output: [[1,5],[6,9]]