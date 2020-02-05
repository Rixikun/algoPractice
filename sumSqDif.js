/*
The sum of the squares of the first ten natural numbers is,

12+22+...+102=385
The square of the sum of the first ten natural numbers is,

(1+2+...+10)2=552=3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

// let sumOfSq = () => {
//     let sum = 0;
//     for(let i = 1; i <= 100; i++) {
//         sum += i*i
//     }
//     return sum
// }
// let sqOfSum = () => {
//     let sum = 0;
//     for(let i = 1; i <= 100; i++) {
//         sum += i
//     }
//     return sum*sum
// }
// let diff = sqOfSum - sumOfSq

// function sumSqDif(){
//     return sqOfSum() - sumOfSq()
// }

function sumSqDif2(){
    let a = 0
    let b = 0;
    for(let i = 1; i <= 100; i++) {
        a += i*i
        b += i
    }
    b = b*b
    return b - a
}

// console.log(sumSqDif())
console.log(sumSqDif2())

