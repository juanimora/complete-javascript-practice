let js = "amazing";

console.log(60 + 4 + 7 + 8 + 5);

console.log("Jonas");
console.log(23);

let firstName = "Juani";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//DATA TYPES

let _string = "Nombre";
let _number = 666;
let _boolean = true;

console.log(_string);
console.log(_number);
console.log(_boolean);

// let, const and var

let age = 24;
// a let variable can change it's value after it's defined

const birthYear = 1999;
// a const variable can never change it's value. it must be defined when the variable it's created

var job = "programmer";
// a var variable it's the old way to declare a variable, it works the same way as let, either way, it should be COMPLETELY avoid as of today

//Concatenate Strings

let firstNameNew = `My name is ${firstName}`;

console.log(firstNameNew);

//IF | ELSE

const driverAge = 16;

if (driverAge >= 18) {
	console.log(`Juani can start driving 🚗`);
} else {
	const yearsToDrive = 18 - driverAge;
	console.log(`Juani can't drive yet, he must wait ${yearsToDrive} years 🚫`);
}

//////////////////////////////////////////////////////

const anoNacimiento = 1999;
let century = 0;

if (anoNacimiento <= 2000) {
	century = 20;
} else {
	century = 21;
}

console.log(`Naciste en el siglo ${century}`);

//////////////////////////////////////////////////////

// falsy values: 0, '', undefined, null, NaN
// all these values when converted to boolean will give a "false" response.

const money = 0; //because money value is "0" is passed as "false" in the console and it triggers the "else" value.

if (money) {
	console.log(`don't spend it all`);
} else {
	console.log(`you should get a job!`);
}

/////////////////////////////////////////////////////

let edad = 18;

if (edad === 18) console.log(`you just turned into an adult!`);

/////////////////////////////////////////////////////

//Equality Operators
// === & ==
// === checks value and type, for example, 18 === 18 is true because are both 18 and type number
// == only checks value, for example, 18 == "18" is true because both values are 18 even if one is a string and the other a number

const favouriteNumber = Number(prompt(`whats your favourite number?`));
console.log(favouriteNumber);

if (favouriteNumber === 12) {
	// "12" == 12
	console.log(`that's a cool number`);
} else if (favouriteNumber === 13) {
	console.log("thats the bad luck number! but still cool");
} else {
	console.log(`that's a number..`);
}

//////////////////////////////////////////////////////

//Logical Operators
// && (AND) - ||(OR) - !value(NOT)
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

/* if (shouldDrive) {
	console.log("sarah is able to drive");
} else {
	console.log("someone else should drive...");
} */

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log("sarah is able to drive!");
} else {
	console.log("someone else should drive...");
}

////////////////////////////////////////////////////

// Switch

const day = prompt("enter a weekday");

switch (day) {
	case "monday": //day === monday
		console.log("plan my course structure");
		console.log("go to coding meetup");
		break;
	case "tuesday":
		console.log("prepare videos");
		break;
	case "wednesday":
	case "thursday":
		console.log("rest");
		break;
	case "friday":
		console.log("wrote videos");
		break;
	case "saturday":
	case "sunday":
		console.log("enjoy the weekend :P");
		break;
	default:
		console.log("not a valid day");
}

// if (day === "monday") {
// 	console.log("plan my course structure");
// 	console.log("go to coding meetup");
// } else if (day === "tuesday") {
// 	console.log("prepare videos");
// } else if (day === "wednesday" || day === "thursday") {
// 	console.log("rest");
// } else if (day === "friday") {
// 	console.log("wrote videos");
// } else if (day === "saturday" || day === "sunday") {
// 	console.log("enjoy the weekend :P");
// } else {
// 	console.log("not a valid day");
// }

///////////////////////////////////////////////////////////////

// Conditional (Ternary) Operator

const newAge = 24;
newAge >= 18
	? console.log("i like to drink wine :)")
	: console.log("i like to drink water :)");

const drink = newAge >= 18 ? "wine" : "water";
console.log(drink);
