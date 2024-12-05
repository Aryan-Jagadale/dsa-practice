var sumSubarrayMins = function(arr) {
  
    // console.log("arrr",arr);
    let n = arr.length;
    const MOD = 1e9 + 7;

    const nse = new Array(n).fill(n);
    const pse = new Array(n).fill(-1);
    let stack = [];
    // PSE
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            pse[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    console.log("pse",pse);
    

    stack.length = 0;
    stack = [];

    //NSE

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length-1]] >= arr[i] ) {
            stack.pop();
        }
        if (stack.length > 0) {
            nse[i] = stack[stack.length-1]
        }
        stack.push(i);
    }



    let result = 0;
    for (let i = 0; i < n; i++) {
        const countLeft = i - pse[i];        
        const countRight = nse[i] - i;
        result = (result + arr[i] * countLeft * countRight) % MOD;
    }

    return result    
};



let rs = sumSubarrayMins([3,1,2,4]);
console.log(rs); // 17


3