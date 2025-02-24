class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findLCA(root, n1, n2) {
    if (!root) return null;
    let curr = root.value;

    if (curr < n1 && curr < n2) {
        return findLCA(root.right, n1, n2);
    }
    if (curr > n1 && curr > n2) {
        return findLCA(root.left, n1, n2);
    }
    return root;
}

// Example usage:
// Constructing the BST
let root = new TreeNode(20);
root.left = new TreeNode(8);
root.right = new TreeNode(22);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(12);
root.left.right.left = new TreeNode(10);
root.left.right.right = new TreeNode(14);

let n1 = 10, n2 = 14;
let lca = findLCA(root, n1, n2);
console.log(`LCA of ${n1} and ${n2} is ${lca.value}`); // Output: LCA of 10 and 14 is 12