class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function flatten(root) {
    if (!root) return;

    let curr = root;

    while (curr) {
        if (curr.left) {
            let rightmost = curr.left;
            while (rightmost.right) {
                rightmost = rightmost.right;
            }
            rightmost.right = curr.right;
            curr.right = curr.left;
            curr.left = null;
        }
        curr = curr.right;
    }
}

// Example usage:
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

flatten(root);

// Output the flattened tree
let current = root;
while (current) {
    console.log(current.val);
    current = current.right;
}
