function howManyHundreds(num){
  return Math.floor(num / 100);
}

console.log("10 is " + howManyHundreds(10) + " hundreds");
console.log("100 is " + howManyHundreds(100) + " hundreds");
console.log("12600 is " + howManyHundreds(12600) + " hundreds");
console.log("12030030 is " + howManyHundreds(12030030) + " hundreds");
console.log("99 is " + howManyHundreds(99) + " hundreds");
console.log("0.01 is " + howManyHundreds(0.01) + " hundreds");

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);