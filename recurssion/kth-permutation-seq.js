function getPermutation(n, k) {
    let fact = 1;
    let numbers = [];
    
    for (let i = 1; i < n; i++) {
        fact *= i;
        numbers.push(i);
    }
    numbers.push(n);
    
    let ans = "";
    k = k - 1;
    
    while (true) {
        ans += numbers[Math.floor(k / fact)];
        numbers.splice(Math.floor(k / fact), 1);
        
        if (numbers.length === 0) {
            break;
        }
        
        k = k % fact;
        fact = fact / numbers.length;
    }
    
    return ans;
}

// Test cases
console.log(getPermutation(3, 3));  // Output: "213"
console.log(getPermutation(4, 9));  // Output: "2314"
console.log(getPermutation(4, 1));  // Output: "1234"
