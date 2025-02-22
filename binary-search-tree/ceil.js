class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// CEIL condtion : value should be greater than or equal to input
function findCeil(root, input) {
    let ceil = -1;

    while (root) {
        if (root.value === input) {
            return root.value;
        }
        if (root.value < input) {
            root = root.right;
        } else {
            ceil = root.value;
            root = root.left;
        }
    }
    return ceil;
}

// Example usage:
const root = new TreeNode(8);
root.left = new TreeNode(4);
root.right = new TreeNode(12);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(6);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(14);

console.log(findCeil(root, 5)); // Output: 6