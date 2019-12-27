function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function(num){
  let laughing = "";
  for (let i = 0; i < num; i++){
    laughing += "ha";
  } 
  return laughing + "!";
});