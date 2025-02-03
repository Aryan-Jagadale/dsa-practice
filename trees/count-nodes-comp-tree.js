// Definition for a binary tree node.
class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function getLeftHeight(node) {
    let height = 0;
    while (node) {
      height++;
      node = node.left;
    }
    return height;
  }

  function getRightHeight(node) {
    let height = 0;
    while (node) {
      height++;
      node = node.right;
    }
    return height;
  }

  function countNodes(root) {
    if (!root) return 0;

    let left = getLeftHeight(root);
    let right = getRightHeight(root);

    console.log("left::>",left);
    console.log("right::>",right);

    if (left === right) {
      return Math.pow(2, left) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
  }
  
  // ----- Example Usage -----
  // Constructing the complete binary tree:
  //         1
  //        / \
  //       2   3
  //      / \  / 
  //     4  5 6   
  // Total nodes = 6
  
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  
  console.log("Total Nodes:", countNodes(root)); // Expected output: 6
  