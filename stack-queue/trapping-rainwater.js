function trap(height) {
    let n = height.length;
    let total = 0;
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = n - 1;

    while (left < right) {
        if (height[left] < height[right]) {
            if (leftMax > height[left]) {
                total += leftMax - height[left];
            }else{
                leftMax = height[left];
            }
            left++;
        }else{
            if (rightMax > height[right]) {
                total += rightMax - height[right];
            }else{
                rightMax = height[right];
            }
            right--;

        }

    }
    return total;
}

// Example usage
const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(heights)); // Output: 6
