class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findMinElement(root) {
    if (!root) {
        return null
    }
    if (!root.left) {
        return root.value
    }
    return findMinElement(root.left)
}

// Example usage:
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.left.left = new TreeNode(12);

root.left.right = new TreeNode(7);
console.log(findMinElement(root)); // Output: 2