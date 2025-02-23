class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isValidBST(root) {
    if (!root) return true;

    function helper(node,min,max){
        if (!node) return true;
            
        if (node.val <= min || node.val >= max) return false;
            
        return helper(node.left,min,node.val) && helper(node.right,node.val,max)
    }
    return helper(root, -Infinity, Infinity);
}

// Example usage:
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log(isValidBST(root)); // Output: true

const invalidRoot = new TreeNode(5);
invalidRoot.left = new TreeNode(1);
invalidRoot.right = new TreeNode(4);
invalidRoot.right.left = new TreeNode(3);
invalidRoot.right.right = new TreeNode(6);

console.log(isValidBST(invalidRoot)); // Output: false