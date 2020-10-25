/*  https://leetcode.com/problems/two-city-scheduling/

A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
*** 1 price in each pair MUST be used

Example 1:
Input: costs = [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

Example 2:
Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
Output: 1859

Example 3:
Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
Output: 3086

             A
let A = [10, 30, 30, 400]; pointerA = 0   limitA = 1
`            B
let B = [20, 20, 50, 200]; pointerB = 0   limitB = 2
A[pointer]

 */

const costs = [[10,20],[30,200],[400,50],[30,20]];
const costs2 =  [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
const costs3 = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]

/**
 * @param {number[][]} costs
 * @return {number}
 */

// sort by PROFIT difference saved by Candidate A (arr pairs) (so neg val, then up)
// before nth indx, A's prices are lower than B's prices, so add A's
// then by nth idx, A's prices are higher than B's prices, so add B's now
var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => {
      const aDiff = a[0] - a[1]
      const bDiff = b[0] - b[1]
      return aDiff - bDiff
    });
    const mid = costs.length/2;
    
    return costs.reduce((acc, cur, i) => {
        if(i < mid) return acc + cur[0];
        else return acc + cur[1];
    }, 0)
}

// console.log(twoCitySchedCost(costs))
console.log(twoCitySchedCost(costs2)) //1859