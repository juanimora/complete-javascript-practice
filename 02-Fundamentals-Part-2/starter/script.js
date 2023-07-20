"use strict";

//Functions

function logger() {
	console.log("my name is juani");
}

// calling / running / invoking function

logger();
logger();
logger();

////////////////////

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

////////////////////
//Function Declarations vs. Expression

// Function declaration
function calcAge1(birthYear) {
	return 2023 - birthYear;
}

const age1 = calcAge1(1999);

// Function expression
const calcAge2 = function (birthYear) {
	return 2023 - birthYear;
};

const age2 = calcAge2(1999);

console.log(age1, age2);

/////////////////////////////////////

// Arrow function

const calcAge3 = (birthYear) => 2023 - birthYear;

const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2023 - birthYear;
	const retirement = 65 - age;
	return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1999, `Juani`));
console.log(yearsUntilRetirement(2005, `Palo`));

//////////////////////////////

// Functions calling other functions

function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
	return juice;
}
console.log(fruitProcessor2(2, 3));

/////////////////////////

const calcAge4 = function (birthYear) {
	return 2023 - birthYear;
};

const yearsUntilRetirement2 = function (birthYear, firstName) {
	const age = calcAge4(birthYear);
	const retirement = 65 - age;
	if (retirement > 0) {
		return retirement;
	} else {
		return -1;
	}
};

console.log(yearsUntilRetirement2(1999, "Juani"));
console.log(yearsUntilRetirement2(1910, "Palo"));

//////////////////////////////////

// Arrays

const friend1 = "Ado";
const friend2 = "Hans";
const friend3 = "Eric";
const friend4 = "Camilo";

const friends = ["Ado", "Hans", "Eric", "Camilo"];

console.log(friends);

// Other way to declare an array
const years = new Array(1991, 19984, 2008, 2020);

// How to call an element from the array
console.log(friends[0]);
console.log(friends[2]);

// Get the number of elements that are in the array
console.log(friends.length);

// Get last element of the array
console.log(friends[friends.length - 1]);

// Replace element of the array
friends[2] = "Jorge";
console.log(friends);

// More examples
const firstName = "Juani";
const juani = [firstName, "Mora", 2023 - 1999, "friends: " + friends];
console.log(juani);
console.log(juani.length);

//Exercise

const edadCalcular = function (nacimientoAno) {
	const edad = 2023 - nacimientoAno;
	return edad;
};

const nuevoYears = [1990, 1967, 2002, 2010, 2018];

const edad1 = edadCalcular(nuevoYears[0]);
const edad2 = edadCalcular(nuevoYears[1]);
const edad3 = edadCalcular(nuevoYears[years.length - 1]);

console.log(edad1, edad2, edad3);

const nuevoEdades = [
	edadCalcular(nuevoYears[0]),
	edadCalcular(nuevoYears[1]),
	edadCalcular(nuevoYears[years.length - 1]),
];

console.log(nuevoEdades);

///////////////////////////////////////////////

// Array Methods

// .push method
// Add an element to the end of the array

const lingo = ["LOL", "LMAO", "XD"];
const newLenght = lingo.push("UWU");

console.log(lingo);
console.log(newLenght);

// .unshift method
// Add an element to the beginning of the array

lingo.unshift("OWO");
console.log(lingo);

// .pop method
// Remove last element of the array

lingo.pop();
const poppedLingo = lingo.pop();
console.log(lingo);
console.log(poppedLingo);

// .shift method
// Removes first element of the array

lingo.shift();
console.log(lingo);

// .indexOf method
// Tells in which position a certain element is in the array

console.log(lingo.indexOf("LOL"));

// .includes method
// returns true if the element is in the array and false if it's not

console.log(lingo.includes("LMAO"));
console.log(lingo.includes("LMFAO"));
