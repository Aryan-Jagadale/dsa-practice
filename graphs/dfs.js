class Graph {
    constructor() {
      this.adjList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjList[vertex]) {
        this.adjList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjList[vertex1]) this.addVertex(vertex1);
      if (!this.adjList[vertex2]) this.addVertex(vertex2);
  
      this.adjList[vertex1].push(vertex2);
      this.adjList[vertex2].push(vertex1); // Remove for directed graph
    }
  
    dfsRecursive(start, visited = new Set(), result = []) {
        visited.add(start);
        result.push(start);

        for (let neighbor of this.adjList[start]) {
            if (!visited.has(neighbor)) {
              this.dfsRecursive(neighbor, visited, result);
            }
        }
        return result;

    }
  
  }
  
  // Example usage
  const graph = new Graph();
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  
  console.log(graph.dfsRecursive("A")); // Output: [ 'A', 'B', 'D', 'C', 'E' ]
//   console.log(graph.dfsIterative("A")); // Output: [ 'A', 'C', 'E', 'B', 'D' ]
  