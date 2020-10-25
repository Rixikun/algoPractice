/*
Given n processes, each process has a unique PID (process id) and its PPID (parent process id).

Each process only has one parent process, but may have one or more children processes. This is just like a tree structure. Only one process has PPID that is 0, which means this process has no parent process. All the PIDs will be distinct positive integers.

We use two list of integers to represent a list of processes, where the first list contains PID for each process and the second list contains the corresponding PPID.

Now given the two lists, and a PID representing a process you want to kill, return a list of PIDs of processes that will be killed in the end. You should assume that when a process is killed, all its children processes will be killed. No order is required for the final answer.

Example 1:
Input: 
pid =  [1, 3, 10, 5] // child 
ppid = [3, 0, 5, 3] // parent
kill = 5
Output: [5,10]
Explanation: 
           0
           |
           3
         /   \
        1     5
             /
            10
Kill 5 will also kill 10.
Note:
The given kill id is guaranteed to be one of the given PIDs.
n >= 1 
*/

const pid =  [1, 3, 10, 5] // child 
const ppid = [3, 0, 5, 3] // parent
const kill = 5

const killProcess = (ppid, pid, kill) => {
  const graph = {}
  const res = []
  //pop graph
  for(let i = 0; i < pid.length; i++){
    const child = pid[i]
    const parent = ppid[i]
    graph[parent] = graph[parent] ? graph[parent].push(child) : [child]
  }
  //bfs, start: kill, add curr to res, explore child
  const queue = [kill]
  while(queue.length){
    let curr = queue.shift()
    res.push(curr)
    graph[curr] && graph[curr].forEach(child => queue.push(child))
  }
  //return res arr
  return res
}

console.log(killProcess(ppid, pid, 5)) //