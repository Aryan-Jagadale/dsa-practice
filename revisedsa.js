function damTree(root) {
    let maxi = 0;

    function height(node) {
        if (node === null) return 0;
        let left = Math.max(0,height(node.left,daimeter));
        let right = height(node.right,daimeter);
        daimeter = Math.max(daimeter,left + right);
    
        return 1 + Math.max(left, right);   
    }

    height(root,daimeter)

    return maxi;
}



function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Example binary tree: [3, 9, 20, null, null, 15, 7]
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

console.log(damTree(root));