class Graph {
    constructor() {
      this.edges = [];
    }
  
    addEdge(from, to, weight = 1) {
      this.edges.push([from, to, weight]);
    }
  
    printGraph() {
      console.log(this.edges);
    }
  }
  
  const graph = new Graph();
  graph.addEdge("A", "B", 5);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "C", 1);
  
  graph.printGraph();
  