var characterReplacement = function(s, k) {
    let hashMap = new Map();
    let maxLen = 0;
    let maxFreq = 0;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        hashMap.set(s[r],(hashMap.get(s[r])|| 0)+1);//Value is length
        //maxFreq
        maxFreq = Math.max(maxFreq,haMashp.get(s[r]));
        //Valid
        let rem_op_k = (r-l+1) - maxFreq;

        if (rem_op_k > k) {
            hashMap.set(s[l], hashMap.get(s[l]) - 1);
            l++;
        }
        maxLen = Math.max(maxLen,r-l+1)
        
    };
    return maxLen;
    
};



let s = "AABABBA", k = 1;
let ans = characterReplacement(s,k);
console.log("The ans is::>",ans);

