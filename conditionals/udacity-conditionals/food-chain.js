let eatsPlants = true;
let eatsAnimals = true;
let category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");
console.log(category)