function range(start, end, step) {

  let array = [];
  
  if (start > end || step === undefined || step <= 0){
    return array;
  }

  for (let i = start; i <= end; i += step){
    array.push(i);
  }

  return array;

}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0, 1, 2));

//these tests should return []
console.log(range(10, 5, 1));
console.log(range(undefined, 1, 2));
console.log(range(1, undefined, 5));
console.log(range(1, 5, undefined));
console.log(range(1, 5, 0));
console.log(range(1, 5, -10));