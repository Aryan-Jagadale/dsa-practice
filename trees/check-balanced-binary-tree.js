// Condition : height(left) - height(right) <= 1

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }


  function isBalanced(root) {
    if (root === null) return 0;
    
    let left = isBalanced(root.left);
    let right = isBalanced(root.right);

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1;
    }
    return Math.max(left, right) + 1 && true;

  }
  
  // Example Usage:
  // Tree: [3, 9, 20, null, null, 15, 7]
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );
  
  console.log(isBalanced(root)); // Output: true
  