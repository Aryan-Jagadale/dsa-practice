// Write a solution to find the maximal rectangle in a binary matrix.


// Solve largest-rect first


function largestRectangleAreaV2(heights) {
    let n = heights?.length;
    let stack = []; // Store index
    let maxAns = 0;

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            let element = heights[stack.pop()];
            let nse = i;
            let pse = stack.length > 0 ? stack[stack.length - 1] : -1;
            maxAns = Math.max(maxAns, element * (nse - pse - 1));
        }
        stack.push(i);
    }
    while (stack.length > 0) {
        let nse = n;
        let element = heights[stack.pop()];
        let pse = stack.length > 0 ? stack[stack.length - 1] : -1;
        maxAns = Math.max(maxAns, element * (nse - pse - 1));

    }
    return maxAns;
}


function maximalRectangle(matrix) {
    //Use prefix sum concept
    
    let pSum = Array(matrix.length).fill(0).map(() => Array(matrix[0].length).fill(0));
    let m = matrix.length;
    let n = matrix[0].length;
    let maxAns = 0;


    // Calculate prefix sum on matrix
    for (let i = 0; i <= n-1; i++) {
        let sum = 0;
        for (let j = 0; j <= m-1; j++) {
            sum += parseInt(matrix[j][i]);
            if (matrix[j][i] === 0) {
                sum = 0
            }  
            pSum[j][i]=sum;
        }
    }

    for (let i = 0; i < n; i++) {
        maxAns = Math.max(maxAns, largestRectangleAreaV2(pSum[i]));
    }

    return maxAns;

}


const matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];
console.log(maximalRectangle(matrix)); // Output: 6

