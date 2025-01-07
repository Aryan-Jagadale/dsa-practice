function bottomView(root) {
    if (!root) return [];
    const nodes = [];

    function dfs(node,x,y) {
        if (!node) {
            return;
        }
        nodes.push([x,y,node.data]);
        dfs(node.left,x-1,y-1)
        dfs(node.right,x+1,y+1)
    }

    dfs(root,0,0);

    nodes.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);

    console.log("nodes::>",nodes);

    const result = [];



    
    

    
}

// Example usage
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(bottomView(root)); // Output: [4, 2, 6, 3, 7]
