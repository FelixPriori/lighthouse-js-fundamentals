const isOdd = function(num){
  return !(num % 2 === 0);
}

console.log("The number 3 is odd: " + isOdd(3))
console.log("The number 10 is odd: " + isOdd(10))
console.log("The number 250205 is odd: " + isOdd(250205))
console.log("The number 0 is odd: " + isOdd(0))