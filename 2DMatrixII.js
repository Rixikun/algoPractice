class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(name) {
      if (!this.adjacencyList[name]) {
        this.adjacencyList[name] = [];
      }
    }
  
    addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  
    removeEdge(v1, v2) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => {
        return v !== v2;
      });
  
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => {
        return v !== v1;
      });
    }
  
    removeVertex(vertex) {
      for (let v of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, v);
      }
  
      delete this.adjacencyList[vertex];
    }
    /*
            A <-- v
          /   \
         B     C
        /       \
       D ------  E
        \       /
         \     /
            F
   */
  
    breadthFirstT(vertex) {
      //look up current vertix at adjacencyList
      // for each el in arr, repeat & make a memo to not infinitely loop/waste time 
      //return in order arr of vertices
      let memo = {} // to remember
      let queue = [vertex]  // to process
      let result = [] // 
  
      while(queue.length){
        let curr = queue.shift()
        if(!memo[curr]){
          memo[curr] = true;
          result.push(curr)
          for(let child of this.adjacencyList[curr]){
            queue.push(child)
          }
        }
      }
      return result
    }
  
    /**
     des = [['LAX:JFK'], ['SFO:LAX']]
     */
  
    /**
                q = [A]
                result = []
  
                a => graph[a] = [b, c]
                add b & c to q
                q = [b, c]
                b => [a, d]
                we DONT WANT ADD 'A' AGAIN!
                 */
  }
  
  let g = new Graph();
  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  g.addVertex('F');
  
  g.addEdge('A', 'B');
  g.addEdge('A', 'C');
  g.addEdge('B', 'D');
  g.addEdge('C', 'E');
  g.addEdge('D', 'E');
  g.addEdge('D', 'F');
  g.addEdge('E', 'F');
  console.log(g)
  
  
  
  console.log('BF Travsersal', g.breadthFirstT('A')); 
  // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
  
  
  