let maxDepth = function(root) {
    if (root === null) return 0;
    
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
     return Math.max(left, right) + 1;
};



function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Example binary tree: [3, 9, 20, null, null, 15, 7]
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

console.log(maxDepth(root)); // Output: 3
