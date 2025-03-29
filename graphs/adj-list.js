class Graph {
    constructor() {
      this.adjList = {};
    }

    addEdge(source, destination) {
        if (!this.adjList[source]) {
            this.adjList[source] = [];
        }
        if (!this.adjList[destination]) {
            this.adjList[destination] = [];
        }
        this.adjList[source].push(destination);
        this.adjList[destination].push(source);
    }

    printGraph() {
        for (const vertex in this.adjList) {
            console.log(`${vertex} -> ${this.adjList[vertex].join(", ")}`);
        }
    }
}





const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.printGraph();