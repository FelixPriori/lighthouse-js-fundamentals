const whichSchool = function (age) {
  if (age < 13){
    return 'Elementary School';
  } else if (age >= 13 && age <= 18){
    return 'Secondary School';
  } else {
    return 'Lighthouse Labs';
  }
}

//tests
console.log(`I am 13 years old therefore I attend ${whichSchool(13)}`);
console.log(`I am 0 years old therefore I attend ${whichSchool(0)}`);
console.log(`I am 120 years old therefore I attend ${whichSchool(120)}`);