class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

//     4
//    / \
//   2   7
//  / \
// 1   3
//

function insertIntoBST(root, val) {
    if (!root) {
        return new TreeNode(val);
    }
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val);
    }
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
}

// Example usage:
let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

root = insertIntoBST(root, 5);
console.log(root);