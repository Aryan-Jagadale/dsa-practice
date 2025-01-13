class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findPath(root, target) {
    const path = [];

    function dfs(node) {
        if (!node) {
            return false;
        }
        path.push(node.value);
        if (node.value === target) return true;

        if (dfs(node.left) || dfs(node.right)) return true;
        path.pop();
        return false;
        
    }

    if (dfs(root)) {
        return path
    }
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

    const target = 5;
    const path = findPath(root, target);
    console.log(`Path to node ${target}:`, path);
})();
