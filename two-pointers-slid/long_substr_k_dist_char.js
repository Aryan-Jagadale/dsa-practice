function main(str, k) {
  let l = 0;
  let n = str.length;
  let hashMap = new Map();
  let maxLen = 0;

  for (let r = 0; r < n; r++) {
    hashMap.set(str[r], (hashMap.get(str[r]) || 0) + 1); // here value is length
    if(hashMap.size > 2){
        hashMap.set(str[l],hashMap.get(str[l])-1);
        if (hashMap.get(str[l]) === 0) {
            hashMap.delete(str[l])
        }
        l++;
    }
    maxLen = Math.max(maxLen,r-l+1);

  }
  return maxLen;
}

let str = "aanacbbeccd";
let k = 2;
let ans = main(str, k);
console.log("The ans is::>", ans);
