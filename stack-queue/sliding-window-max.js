//  Intution
//  [1, 3, -1, -3, 5, 3, 6, 7]      
//   0   1   2  3  4  5  6  7 ---> index
//  {n-k} Till her we will run loop
//




function maxSlidingWindow(nums, k) {
    console.log("nums: ", nums,"k--",k);
    // ----------Brute force
    // const list = [];
    // const n = nums.length;

    // for (let i = 0; i <= n-k; i++) {
    //     let max = nums[i];
    //     for (let j = i; j <=  i+k-1 ; j++) {

    //         max = Math.max(max, nums[j]);
    //     }
    //     list.push(max);
    // }

    // return list;

    //----------Optimal
    const n = nums.length;

    let result = [];
    let deque = [];

    for (let i = 0; i < nums.length; i++) {

        if (deque.length && deque[0] < i - k + 1) {
            deque.shift();
        }

        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);


        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
        
        
    }
    return result;
}

// Example usage:
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(nums, k)); // Output: [3, 3, 5, 5, 6, 7]
