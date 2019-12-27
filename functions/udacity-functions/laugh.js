
function laugh(num){
  let laughing = "";
  for (let i = 0; i < num; i++){
    laughing += "ha";
  } 
  return laughing + "!";
}

//test
console.log(laugh(12));