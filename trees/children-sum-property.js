// Define the structure of a binary tree node
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function isChildrenSumProperty(root) {
    if (root == null) {
      return true;
    }
    let child = 0;

    if (root.left != null) {
      child += root.left.data;
    }
    if (root.right != null) {
      child += root.right.data;
    }
    if (child >= root.data) {
        root.data = child;
    }else{
        if (root.left !== null) {
            root.left.data = root.data;
        }
        if (root.right !== null) {
            root.right.data = root.data;
        }
    }

    isChildrenSumProperty(root.left);
    isChildrenSumProperty(root.right);


    let total = 0;

    if (root.left != null) {
      total += root.left.data;
    }
    if (root.right != null) {
      total += root.right.data;
    }

    if (root.left !== null || root.right !== null) { /// not leaf node
       root.data = total;   
    }
  
  }
  


// Constructing the binary tree
let root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(1);
root.right.right = new Node(1);

// Check if the tree satisfies the Children Sum Property
if (isChildrenSumProperty(root)) {
  console.log("The tree satisfies the Children Sum Property.");
} else {
  console.log("The tree does not satisfy the Children Sum Property.");
}
