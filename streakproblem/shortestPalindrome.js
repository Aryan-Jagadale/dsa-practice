function isPalindrome(str) {
    let n = str.length;
    for (let left = 0; left < Math.ceil(n/2); left++) {
        const element = s[left];
        if (element !== s[n-left-1]) {
            return false
        }
    }
    return true 
}


var shortestPalindrome = function(s) {
    if (isPalindrome(s)) {
        return s;
    }

    //---->Brute force
    // const rev = s.split('').reverse().join('');
    // for (let i = 0; i <= s.length; i++) {
    //     if (s.startsWith(rev.slice(i))) {
    //         return rev.slice(0, i) + s;
    //     }
    // }

    //---->Better force
    let left = 0;
    let n  = s.length;
    for (let right = n-1; right >= 0; right--) {
        if (s[left]===s[right]) {
            left+=1
        }
    }
    
    console.log(left);
    if (left === n) {
        return s
    }
    let extractSuffix = s.substring(left);
    let reverseSuffix = s.substring(left).split('').reverse().join('');
    // console.log(extractSuffix);
    
    return reverseSuffix + shortestPalindrome(s.substring(0,left)) + extractSuffix
    
};


let s = "abcd"; //abcdadcba
let result = shortestPalindrome(s);
console.log("Result",result);




