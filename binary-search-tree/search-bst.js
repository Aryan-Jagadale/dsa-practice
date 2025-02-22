class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function searchBST(root, value) {
    if (!root) {
        return null
    }
    if (root.value ===value) {
        return root
    }
    if(root.value  > value){
        return searchBST(root.left, value)
    }else{
        return searchBST(root.right, value)
    }

}

// Example usage:
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

const result = searchBST(root, 7);
console.log(result); // TreeNode { value: 2, left: TreeNode { value: 1, left: null, right: null }, right: TreeNode { value: 3, left: null, right: null } }