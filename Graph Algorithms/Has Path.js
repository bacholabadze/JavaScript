const hasPath = (graph, src, dst) => {
  const stack = [src];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return false;
};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["k"],
  j: ["i"],
  k: [],
};

// (f) --> (g) --> (h)
//  |   `/`
// .|. /
// (i) <-- (j)
//  |
// .|.
// (k)

fk = hasPath(graph, "f", "k");
console.log(fk);
