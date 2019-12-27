1, 5, 10, 25;

const coins = [1, 15, 25];
const target = 30; //46 = 15+15(30..15)+15(45...30) + 1

const minCoinChange = (coins, target) => {
  const combos = new Array(target + 1).fill(Infinity);
  combos[0] = 0;
  for (const coin of coins) {
    for (let amount = 0; amount < combos.length; amount++) {
      if (coin <= amount) {
        combos[amount] = Math.min(combos[amount], combos[amount - coin] + 1);
      }
    }
  }
  return combos[target] !== Infinity ? combos[target] : -1;
};

console.log(minCoinChange(coins, target));

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [13, 4, 12, 10, 2, 5, 7];

const mergeSort = arr => {};

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
