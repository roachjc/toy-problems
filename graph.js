// THIS IS INCOMPLETE / INCORRECT !!

class Graph {
  constructor() {
    this.adjacencyList = {};
    this.numOfVertices = 0;
  }

  addVertex() {
    this.adjacencyList[this.numOfVertices] = [];
    this.numOfVertices += 1;
  }

  addEdge(origin, dest, weight) {
    this.adjacencyList[origin].push({ origin, dest, weight });
  }

  adjacent(vertex) {
    return this.adjacencyList[vertex];
  }

  degree(vertex) {
    // number of edges both in and out of given vertex
    let countEdges = this.adjacencyList[vertex].length;
    Object.keys(this.adjacencyList).forEach((vert))
  }
}

const graph = new Graph();

graph.addVertex();
graph.addVertex();
graph.addVertex();
graph.addVertex();
graph.addEdge(1, 3, 0.4);
graph.addEdge(1, 2, 0.4);
graph.addEdge(2, 0, 0.4);
graph.addEdge(0, 3, 0.4);

console.log(graph.adjacencyList);

function breadthFirst(source, myGraph) {
  const result = [];
  const visited = new Set();
  const queue = [source];
  while (queue.length) {
    // take first elem in queue
    const shifted = queue.shift();
    // add to visited and result
    visited.add(shifted);
    result.push(shifted);
    // iterate over shifted and add only if not in set
    myGraph.adjacencyList[shifted].forEach((edge) => {
      // if edge is not in visited
      if (!visited.has(edge.dest)) {
      // add to queue
        queue.push(edge.dest);
      }
    });
  }
  return result;
}

function depthFirst(source, graph) {
  const visited = new Set(source);
  graph.adjacencyList.forEach((edge) => {
    if (!visited.has(edge.dest)) {
      depthFirst(edge.dest, graph);
    }
  })
}

console.log(breadthFirst(1, graph));


