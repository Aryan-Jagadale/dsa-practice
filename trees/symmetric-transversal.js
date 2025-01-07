function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function isSymmetric(root) {
    console.log("root::>",root);

    function isMirror(left,right) {

        if (left === null || right === null) {
            return left ===  right
        }

        return (
            left.val === right.val && isMirror(left.left,right.right) && isMirror(left.right,right.left)
        )        
    }

    if (!root) return true;
    
    return isMirror(root.left, root.right);
}



// Example tree: [1, 2, 2, 3, 4, 4, 3]
const root = new TreeNode(
    1,
    new TreeNode(9, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

console.log(isSymmetric(root));
