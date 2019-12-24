let shirtWidth = 23;
let shirtLength = 30;
let shirtSleeve = 8.71;
let yourSize = 'N/A';

if ((shirtWidth >= 18 && shirtWidth < 20) 
    && (shirtLength === 28) 
    && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)){
  yourSize = 'S';
} else if ((shirtWidth >= 20 && shirtWidth < 22) 
    && (shirtLength === 29) 
    && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)){
  yourSize = 'M';    
} else if ((shirtWidth >= 22 && shirtWidth < 24) 
    && (shirtLength === 30) 
    && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)){
  yourSize = 'L';
} else if ((shirtWidth >= 24 && shirtWidth < 26) 
    && (shirtLength === 31) 
    && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)){
  yourSize = 'XL';
} else if ((shirtWidth >= 26 && shirtWidth < 28) 
    && (shirtLength >= 31 && shirtLength < 33) 
    && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)){
  yourSize = '2XL';
} else if ((shirtWidth >= 28) 
    && (shirtLength >= 33) 
    && (shirtSleeve >= 10.13)){
  yourSize = '3XL';
}

console.log(`Your size is ${yourSize}`);