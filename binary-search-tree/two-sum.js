class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function findTarget(root, k) {
    const set = new Set();
    return dfs(root, set, k);
}

function dfs(node, set, k) {
    if (!node) return false;
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    return dfs(node.left, set, k) || dfs(node.right, set, k);
}

// Example usage:
const root = new TreeNode(5, new TreeNode(3), new TreeNode(6));
console.log(findTarget(root, 9)); // true
// console.log(findTarget(root, 28)); // false