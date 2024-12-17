// Longest dist between 2 nodes
// Path doesnt need to go via root

let damTree = function(root,maxi) {
    if (root === null) return 0;

    let left = damTree(root.left,maxi);
    let right = damTree(root.right,maxi);
    maxi = Math.max(maxi,left + right);
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

console.log(damTree(root,0));