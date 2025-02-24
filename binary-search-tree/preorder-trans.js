class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function bstFromPreorder(preorder) {
    function insertIntoBST(root, value) {
        if (!root) return new TreeNode(value);
        if (value < root.value) {
            root.left = insertIntoBST(root.left, value);
        } else {
            root.right = insertIntoBST(root.right, value);
        }
        return root;
    }

    for (let i = 1; i < preorder.length; i++) {
        insertIntoBST(root, preorder[i]);
    }
}


// Example usage:
let root = new TreeNode(8);
let preorder = [8, 5, 1, 7, 10, 12];
let res = bstFromPreorder(preorder);
console.log("res", res); 

