const director = "Steven Spielberg";
const film1 = "Jaws";
const film2 = "Raiders of the Lost Ark";
const film3 = "A.I.";
const films = [film1, film2, film3];

console.log("My favourite " + director + " film is " + films[1]);

films[2] = "Jurassic Park";
films.push("A.I.");
films.push("E.T.");

console.log("films at index 0 : " + films[0] +
        "\nfilms at index 1 : " + films[1] +
        "\nfilms at index 2 : " + films [2] +
        "\nfilms at index 3 : " + films[3] +
        "\nfilms at index 4 : " + films[4]
);

console.log(director + " is the director of " + films.length + " films");
