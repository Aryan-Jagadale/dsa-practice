class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function rightView(root) {
    const nodes = [];

    function dfs(node, lvl) {
        if (!node) return;

        if (lvl === nodes.length) {
            nodes.push(node.value);
        }
        dfs(node.right, lvl + 1);
        dfs(node.left, lvl + 1);
    }

    dfs(root, 0);
    return nodes;

  }
  
  // Example Usage
  const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(5);
  
  console.log(rightView(root)); // Output: [1, 3, 6]
  