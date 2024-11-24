function nextGreaterElements(arr) {
    let n = arr.length;
    // console.log("n:>",n);
    let result = new Array(n).fill(-1);
    let stack = [];// [5, ]

    for (let i = n - 1; i >= 0; i--) {
        const element = arr[i];


        while (stack.length !== 0 && stack[stack.length - 1] <= element) {
            stack.pop()
        }
        if (stack.length === 0) {
            result[i] = -1
        }else{
            result[i] = stack[stack.length-1]
        }
        stack.push(element)
    }
    return result;
}

const testArray = [1, 2, 5];
console.log(nextGreaterElements(testArray)); 
