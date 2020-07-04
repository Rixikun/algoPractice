/*
At a lemonade stand, each lemonade costs $5.
Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
Note that you don't have any change in hand at first.
Return true if and only if you can provide every customer with correct change.

Example 1:
Input: [5,5,5,10,20]
Output: true
Explanation:
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.

Input: [5,5,10,10,20]
Output: false
*/
/*
 * @param {number[]} bills
 * @return {boolean}
 */

//keep track of cash on hand
//find change necessary
//return false on impossible bill combo for change
//else all is possible , return true

var lemonadeChange = function(bills) {
  let holding = {'5':0, '10':0, '20':0}
  for(let i = 0; i < bills.length; i++) {
    let bill = bills[i];
    let change = bill - 5;
    if(change === 0){
      holding['5']++;
    }
    if(change === 5) {
      if(holding['5'] > 0) {
        holding['5']--;
        holding['10']++;
      } else {
        return false
      }
    }
    else if(change === 15) {
      if(holding['10'] >= 1 && holding['5'] >= 1){
          holding['10']--;
          holding['5']--;
          holding['20']++;
      }
      else if(holding['5'] >= 3) {
        holding['5'] = holding['5'] - 3;
        holding['20']++;
      }
      else if((holding['5'] < 3)) {
        return false
      }
    }
  }
  return true
};

let input1 = [5,5,5,10,20] //true
let input2 = [5,5,10,10,20] //false
let input3 = [5,5,5,10,5,5,10,20,20,20]
let input4 = [5,5,5,20,20,10,5,10,10,20]

// console.log(lemonadeChange(input1))
console.log(lemonadeChange(input2))
// console.log(lemonadeChange(input3))
// console.log(lemonadeChange(input4))
