class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function lowestCommonAncestor(root, p, q) {
    if (!root) return null;

    if (root === p || root === q) {
        return root
    }

    
  
   
  }
  




// Create a test binary tree:
//       3
//      / \
//     5   1
//    / \ / \
//   6  2 0  8
//     / \
//    7   4

const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// Nodes to find LCA for
const p = root.left; // Node 5
const q = root.left.right.right; // Node 4

console.log(lowestCommonAncestor(root, p, q).value); // 5
