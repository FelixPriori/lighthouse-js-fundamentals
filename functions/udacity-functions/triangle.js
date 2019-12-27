//makes a line made out of * of the desired length.
function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

//builds the triangle of the desired width.
function buildTriangle(width){
  let triangle = "";
  for (let i = 1; i <= width; i++){
    triangle += makeLine(i);
  }
  return triangle;
}

//test
console.log(buildTriangle(10));