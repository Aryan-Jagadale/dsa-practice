class TreeNode {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

function insertIntoBST(root, val) {
  if (!root) return new TreeNode(val); // Base case: empty tree or found insertion point

  if (val < root.val) {
      root.left = insertIntoBST(root.left, val); // Recursively insert into the left subtree
  } else {
      root.right = insertIntoBST(root.right, val); // Recursively insert into the right subtree
  }

  return root; // Return the updated tree
}

// Helper function to do an inorder traversal (for testing)
function inorderTraversal(root) {
  if (!root) return [];
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}

// Example Usage
let root = new TreeNode(8);
insertIntoBST(root, 4);
insertIntoBST(root, 12);
insertIntoBST(root, 2);
insertIntoBST(root, 6);
insertIntoBST(root, 10);
insertIntoBST(root, 14);

console.log(inorderTraversal(root)); 
// Expected output: [2, 4, 6, 8, 10, 12, 14]