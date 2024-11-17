var minWindow = function (s, t) {
  let l = 0,
    r = 0;
  let n = s.length;
  let minLength = Infinity;
  let cnt = 0;
  let hash = new Map();
  let sIndex = -1;

  for (let i = 0; i < t.length; i++) {
    hash.set(t[i], (hash.get(t[i]) || 0) + 1);
  }

  while (r < n) {
    if (hash.get(s[r]) > 0) {
      cnt += 1;
    }
    hash.set(s[r], (hash.get(s[r])|| 0) - 1);
    while (cnt === t.length) {
        if (r-l+1 < minLength) {
            minLength = r-l+1;
            sIndex = l;
        }
        hash.set(s[l],hash.get(s[l])+1);
        if (hash.get(s[l]) > 0) {
            cnt = cnt -1
        }
        l=l+1
    }
    r = r+1
  }
  return sIndex === -1 ? "" : s.substring(sIndex,sIndex+minLength);
};

let ans = minWindow("ADOBECODEBANC", "ABC");
console.log("The ans", ans);
