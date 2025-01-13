class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findPath(root) {
    console.log("root",root);
    
    const res = [];

    function dfs(node,path) {
        if (!node) {
            return;
        }
        path.push(node.value);
        if (!node.left && !node.right) {
            res.push([...path])
        }
        
        
        dfs(node.left,path);
        dfs(node.right,path);

        path.pop();
    }

    dfs(root,[])
    return res
}

// Test case
(function test() {
    // Create the binary tree
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    const path = findPath(root);
    console.log(`Path to node :`, path);
})();
