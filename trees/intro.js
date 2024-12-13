
class TreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}
  
class BinaryTree {
    constructor() {
      this.root = null;
    }
  

    insert(data) {
      const newNode = new TreeNode(data);

        if (this.root === null) {
            this.root = newNode;
            return;
        }
        const queue = [this.root];
        console.log("queue", queue);
        while (queue.length) {
            const node = queue.shift();

            if (!node.left) {
                node.left = newNode;
                break;
            }else{
                queue.push(node.left);
            }

            if (!node.right) {
                node.right = newNode;
                break;
            }else{
                queue.push(node.right)
            }
            console.log("queue::>",queue);
            
            
        }
        


    

    }
  
    // Method for in-order traversal (left -> root -> right)
    inOrder(node = this.root) {
        console.log("node", node);
        
      
    }
  
    // Method for pre-order traversal (root -> left -> right)
    preOrder(node = this.root) {
      if (node !== null) {
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    }
  
    // Method for post-order traversal (left -> right -> root)
    postOrder(node = this.root) {
      if (node !== null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
      }
    }
  }
  
  // Example Usage
  const tree = new BinaryTree();
  tree.insert(1);
  tree.insert(2);
  tree.insert(3);
  tree.insert(4);
  tree.insert(5);
// console.log("tree", tree);

  
//   console.log("In-Order Traversal:");
//   tree.inOrder();
  
//   console.log("Pre-Order Traversal:");
//   tree.preOrder();
  
//   console.log("Post-Order Traversal:");
//   tree.postOrder();
  