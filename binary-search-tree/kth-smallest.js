class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function kthSmallest(root, k) {
    let count = 0;
    let result = null;

    function inorder(root) {
        if (!root) return;
        inorder(root.left);
        count++;
        if (count === k) {
            result = root.val;
            return;
        }
        inorder(root.right);
    }

   inorder(root)
   return result;
}
//Example:
let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

root = kthSmallest(root, 1);
console.log(root);