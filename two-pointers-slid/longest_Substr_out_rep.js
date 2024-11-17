var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let l = 0;
    let hashMap = new Map();
    let maxLen = 0; 
    for (let r = 0; r < n; r++) {
        if (hashMap.has(s[r])) {
            l = Math.max(hashMap.get(s[r]) + 1, l);
        }
        hashMap.set(s[r],r);
        maxLen = Math.max(maxLen,r-l+1)     
    }
    return maxLen;
};

let s = "abcabcbb";
let result = lengthOfLongestSubstring(s);
console.log("Result::>",result);




