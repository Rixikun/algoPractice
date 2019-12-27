// You want to download package A.

// A: b, c, d
// b: ,
// c: d, e,
// d: e,
// e: ,

// what is the download order
const graph = {
  a: ["b", "c", "d"],
  b: [],
  c: ["d", "e"],
  d: ["e"],
  e: []
};

const visitedObj = list => {
  const obj = {};
  for (const key of Object.keys(list)) {
    obj[key] = false;
  }
  return obj;
};

const dfs = (startNode, graph) => {
  let visited = visitedObj(graph);
  return dependencies(startNode, visited, graph);
};

function dependencies(startNode, visited, graph, res = []) {
  visited[startNode] = true;
  let edges = graph[startNode];
  for (const edge of edges) {
    console.log(edge);
    if (!visited[edge]) {
      res.push(edge);
      dependencies(edge, visited, graph, res);
    }
  }
  return res;
}

console.log(dfs("a", graph));
