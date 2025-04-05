// Breadth-First Search (BFS) implementation in JavaScript

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
        }
    }

    bfs(start) {
        if (!this.adjacencyList.has(start)) {
            console.log("Start vertex not found in the graph.");
            return;
        }

        const visited = new Set();
        const queue = [start];
        const result = [];
        while(queue.length > 0){
            let vertex = queue.shift();
            visited.add(vertex);
            result.push(vertex);

            if (this.adjacencyList.has(vertex)) {
                let neighbours = this.adjacencyList.get(vertex);
                for (const nei of neighbours) {
                    if(!visited.has(nei)){
                        visited.add(nei);
                        queue.push(nei);
                    }
                }
            }
        }

        return result;
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

console.log("BFS Traversal:", graph.bfs('A'));