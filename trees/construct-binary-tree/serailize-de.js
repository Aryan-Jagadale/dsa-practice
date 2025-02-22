class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    const result = [];

    function helper(root) {
        if (!root) {
            result.push('null');
            return;
        }
        result.push(root.val);
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    return result.join(',');
}

// function deserialize(data) {
//     const values = data.split(',');
//     let index = 0;
//     function helper() {
//         if (values[index] === 'null') {
//             index++;
//             return null;
//         }
//         const node = new TreeNode(parseInt(values[index]));
//         index++;
//         node.left = helper();
//         node.right = helper();
//         return node;
//     }
//     return helper();
// }

// Test cases

function deserialize(data) {
    const val = data.split(',');
    const queue = val.slice();

    function helper() {
        if (queue.length === 0) return null;
        const currentVal = queue.shift();
        if (currentVal === 'null') return null;
        const node = new TreeNode(parseInt(currentVal));
        node.left = helper();
        node.right = helper();
        return node;
    }
    return helper();
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

const serialized = serialize(root);
console.log(serialized); // Output: "1,2,null,null,3,4,null,null,5,null,null"

const deserialized = deserialize(serialized);
console.log(serialize(deserialized)); // Output: "1,2,null,null,3,4,null,null,5,null,null"