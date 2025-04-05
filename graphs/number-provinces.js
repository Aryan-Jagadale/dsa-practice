/**
 * Number of Provinces
 * A province is a group of directly or indirectly connected cities and no other cities outside of the group.
 * This function calculates the number of provinces in a given graph represented as an adjacency list.
 * 
 * @param {number[][]} isConnected - Adjacency matrix representing the graph.
 * @return {number} - Number of provinces.
 */
function findCircleNum(isConnected) {
    const n = isConnected.length;

    // Convert adjacency matrix to adjacency list
    const adjList = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1 && i !== j) {
                adjList[i].push(j);
            }
        }
    }

    console.log("adjList::>",adjList);
    

    const visited = new Array(n).fill(false);
    let provinceCount = 0;

    const dfs = (node) => {
        visited[node] = true;
        for (const neighbor of adjList[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    };

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            provinceCount++;
            dfs(i);
        }
    }

    return provinceCount;
}

// Example usage:
const isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
];
console.log(findCircleNum(isConnected)); // Output: 2