function largestRectangleAreaV1(heights) {
    let n = heights.length;
    const nse = new Array(n).fill(n);
    const pse = new Array(n).fill(-1);
    let max = 0;

    let arr = []

    //PSE
    for (let i = 0; i < n; i++) {
        while (arr.length > 0 && heights[arr[arr.length-1]]>heights[i]) {
            arr.pop();
        }
        if (arr.length>0) {
            pse[i] = arr[arr.length-1];
        }
        arr.push(i);
    }

    arr.length = 0;
    arr = [];

    //NSE
    for (let i = n - 1; i >= 0; i--) {
        while (arr.length > 0 && heights[arr[arr.length-1]]>=heights[i]) {
            arr.pop();
        }
        if (arr.length>0) {
            nse[i] = arr[arr.length-1];
        }
        arr.push(i);
    }

    for (let i = 0; i < n; i++) {
        max = Math.max(max,heights[i] *(nse[i]-pse[i]-1));
    }
    return max;
}

// Intution Watch video https://www.youtube.com/watch?v=ZmnqCZp9bBs

function largestRectangleAreaV2(heights) {
    let n = heights.length;
    let stack = []; // Store index
    let maxAns = 0;

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[stack[stack.length-1]] > heights[i]) {
            let element = heights[stack.pop()];
            let nse = i;
            let pse = stack.length > 0 ? stack[stack.length-1] : -1;
            maxAns = Math.max(maxAns, element * (nse - pse - 1));
        }
        stack.push(i);
    }
    while (stack.length> 0) {
        let nse = n;
        let element = heights[stack.pop()];
        let pse = stack.length > 0 ? stack[stack.length-1] : -1;
        maxAns = Math.max(maxAns, element * (nse - pse - 1));

    }
    return maxAns;
}

// Example
console.log(largestRectangleAreaV2([2, 1, 5, 6, 2, 3])); // Output: 10
