function nextGreaterElements(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1); 
    const stack = []; 

    for (let i = 2*n-1; i >= 0; i--) {
        const element = nums[i%n];

        while (stack.length !== 0 && stack[stack.length - 1] <= element) {
            stack.pop()
        }
        if (i < n) {
            if (stack.length === 0) {
                result[i] = -1
            }else{
                result[i] = stack[stack.length-1]
            }
        }
        stack.push(element)
    }
    return result;
}


const nums = [5, 2, 3];
console.log(nextGreaterElements(nums));
