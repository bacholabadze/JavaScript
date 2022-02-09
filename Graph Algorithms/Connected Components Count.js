const countComponents = (edges) => {
  const graph = buildGraph(edges);
  console.log(graph);
  console.log(counter(graph));
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (a != undefined && !(a in graph)) graph[a] = [];
    if (b != undefined && !(b in graph)) graph[b] = [];
    if (a != undefined && b != undefined) graph[a].push(b);
    if (b != undefined) graph[b].push(a);
  }
  return graph;
};
const counter = (graph) => {
  let used = new Set();
  let stack = [];
  let count = 0;
  for (let i in graph) {
  }
};
const edges = [[1, 2], [4, 6], [5, 6], [6, 8], [6, 7], [3]];

countComponents(edges);
