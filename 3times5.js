function sum35(num) {
  let all = [];
  let count3 = 1;
  let count5 = 1;
  let three = 3;
  let five = 5;
  while (three * count3 < num) {
    if (!all.includes(three * count3)) {
      all.push(three * count3);
    }
    count3++;
  }
  while (five * count5 < num) {
    if (!all.includes(five * count5)) {
      all.push(five * count5);
    }
    count5++;
  }
  return all.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(sum35(10));
console.log(sum35(1000));
