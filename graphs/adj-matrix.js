class GraphMatrix {
    constructor(size) {
        this.matrix = Array(size)
          .fill(null)
          .map(() => Array(size).fill(0));
      }
    addEdge(source, destination) {
        this.matrix[source][destination] = 1;
        this.matrix[destination][source] = 1;

    }
    removeEdge(source, destination) {
        this.matrix[source][destination] = 0;
    }
    hasEdge(source, destination) {
        return this.matrix[source][destination] === 1;
    }
    printGraph() {
        console.log(this.matrix);
    }
}



const graphM = new GraphMatrix(3);
graphM.addEdge(0, 1);
graphM.addEdge(1, 2);
graphM.printGraph();