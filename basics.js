'use strict';

// Practice File


//This is a comment

// NOTE: Shift alt A to comment code!!


/* 

let js = "woah";
console.log(1+2-3);
console.log(js);
console.log(true);


// typeof shows the datatype

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "what");
console.log(typeof null);

 */


/* 

let age = 30; // Can be reasigned - let is block scoped
age = 31;

const year = 2024; // Can not be reassigned


var job = 'Programmer'; // var is function scoped
job = 'Teacher'

lastName = 'Roberts' // global scope
console.log(lastName)

 */


// Operators

/*

Assignment Operaters

    -      =     minus
    *      =     multiply
    /      =     divide
    **     =     to the power of
    +      =     add or concatonate
    ++     =     add 1
    --     =     minus 1
    typeof =     shows datatype
    =      =     do somthing to a variable
    +=     =     add somthing to a variable
    -=     =     minus somthing to a variable
    *=     =     multiply somthing to a variable
    /=     =     divide somthing to a variable

Comparison Operators

    >      =     greater than
    <      =     less than
    >=     =     greater than or equal to
    <=     =     less than or equal to

*/



//BMI calculator

/* 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMImark = massMark / heightMark ** 2;
const BMIjohn = massJohn / heightJohn ** 2;
const higherBMI = BMImark > BMIjohn;
console.log(BMImark, BMIjohn, higherBMI);
 */


/* 
//The f string of js
const Name = "Charlie";
console.log( `Hi I am ${Name}`);

// use backsticks so can always use both other quotations (` `)
// \n still works!!
// backsticks enable multiline writing without \n
 */


//if statements


/* 
const age = 16;
const ageMinimum = age >= 17;

if (ageMinimum) {
    console.log(`Can get drivers licence!`);
} else {
    const yearsLeft = 17 - age;
    console.log(`Not old enough for drivers licence you will have to wait ${yearsLeft} year(s)`);
}

const birthYear = 1998;
var century;
if(birthYear <= 2000) {
    var century = `20th`;
} else {
    var century = `21st`;
}
console.log(century)
console.log(`You were born in the ${century} century`);

 */


/* 
//type conversion

const inputYear = `2007`;
console.log(inputYear + 10); //output: 200710
console.log(Number(inputYear) + 10); //output: 2017
console.log(Number(`Charlie`)); //output: NaN (Not a Number)
console.log(typeof NaN); //output: number (NaN is just an invalid number)
console.log(String(23)); //output: 23
console.log(typeof(String(23))); //output: string
console.log(typeof(String(23), 23)); //output: number
console.log((String(23)) + 23); //output 2323
 */

/* 
// type coercion

console.log('I am ' + '23' + ' years old');
console.log('I am ' + 23 + ' years old'); // coercion is forcing the number as a string when concatanated
console.log('23' - '10' - 3); //output: 10 (as a number)
console.log('23' * '2'); //output: 46 (gives a number)

let n = '1' + 1; // 11
n = n - 1; // 11 - 1
console.log(n) // output: 10

// 2+3+4+'5' = "95"
// '10' - '4' - '3' = 3
// '10' - '4' - '3' - 2 + '5' = "15"

 */



/* 
// truey ans falsey values - boolean

// 5 falsy values: 0, '', undefined, null, NaN
// everything else is a truthy value

console.log(Boolean(0)); // output: false
console.log(Boolean('')); // output: false
console.log(Boolean(undefined)); // output: false
console.log(Boolean(null)); // output: false
console.log(Boolean(NaN)); // output: false
console.log(Boolean(16)); // output: true
console.log(Boolean('Charlie')); // output: true

const money = 0; // false (if money > 0 then will be true)
if (money) {
    console.log("Don't spend it all!"); // true
} else {
    console.log('Get a job!'); // false
}

let height; // a way to check if has value - has no given value as output: :( height is not defined
if (height) {
    console.log(`YAY!! height is defined`);
} else {
    console.log(`:( height is not defined`);
}
 */

/* 
//equality operators, == vs ===
const age = 18
if (age === 18) console.log(`Woah, you are newly an adult :D`); //true
// === is only true or false - is a strict operator as it is only t or f
// 18 === 18 is true & 18 === 19 is false
// == is the loose equality operator - it does type correction
if (age === '18') console.log(`Woah, you are newly an adult :D`);// true
// '18' == 18 is true

const fav = prompt(`fav number? `); //promt is input
console.log(fav);
console.log(typeof fav);

if (fav === 23) {
    console.log("waoh i like 23");
} else if (fav === 9) {
    console.log(`9 sucks`);
}

if(fav !== 23) console.log (`why`);

 */


/* 

//boolean logic
// AND, OR, NOT

const hasLicense = true;
const goodVision = true;

console.log(hasLicense && goodVision); // && is AND
console.log(hasLicense || goodVision); // || is OR
console.log(!hasLicense) // ! is NOT
console.log(!goodVision) // ! is NOT

const shouldDrive = hasLicense && goodVision;

if (shouldDrive) {
    console.log(`Can drive!`)
} else {
    console.log(`Can't drive`)
}

 */

// NOTES BEFORE THIS COMMENT HAVE BEEN TAKEN

/* 
//Average score calculator

const scoreDolphins = (96 + 108 + 89) /3;
const scoreKoalas = (88 + 91 + 110) /3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
}

 */


/* 

//The switch statement
const day = "tuesday";

switch(day) { // basicly if else yet completely different
    case "monday": // day === 'monday' (which is true)
        console.log("Hey! It seems to be monday!");
        console.log(4 + " is a number");
        console.log(`on ${day}, f-strings are weird in js`);
        break;
    case "tuesday":
        console.log("Crap, its tuesday");
        break;
    case "wednesday": // executes code below for both cases
    case "thursday":
        console.log("Wednesday and Thursday are basicly the same day");
        console.log("woah");
        break;
    default:
        console.log("Only monday to thursday exist in this dimention");
        break;
}

//The switch statement but as an if statement

if (day === "monday") {
    console.log("Hey! It seems to be monday!");
    console.log(4 + " is a number");
    console.log(`on ${day}, f-strings are weird in js`);
} else if (day === "tuesday") {
    console.log("Crap, its tuesday");
} else if (day === "wednesday"  || day === "thursday") {
    console.log("Wednesday and Thursday are basicly the same day");
    console.log("woah");
} else {
    console.log("Only monday to thursday exist in this dimention");
}
 */


/* 
// Statements and expressions
// Expressions are values in js
// 3 + 4 is an expression
// 235 is an expression
// true && false && !false is an expression
// an if, else, switch statement is a statement
// you can fine expressions in statements
// console.log(`I'm ${3000 - 2980} years old`); that value has to be an expression




// The conditional operator
const age = 18;

age >= 18 ? console.log("Has valid ID") : console.log ("No valid ID");

// this is a super teeny tiny if else statement

const conditionalValidID = age >= 18 ? "Has valid ID" : "No valid ID";
console.log(conditionalValidID);

//as an if statement

let ifValidID;
if (age >= 18) {
    ifValidID = "Has valid ID";
} else {
    ifValidID = "No valid ID";
}
console.log(ifValidID);

//super cool and will come in handy in future
console.log(`ID checker: ${age >= 18 ? "Has valid ID" : "No valid ID"}`); //output: ID checker: Has valid ID


// tip calculator
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`Bill cost: £${bill}\nTip cost: £${tip}\nTotal cost: £${bill + tip}`);

 */


/*
//use strict shows errors in the terminal that may be normaly looked over
'use strict';
let hasDriversLicense = false;
const passTest = true; 
 
if (passTest) hasDriverLicense = true; //variable is driver instead of drivers
if (hasDriversLicense) console.log('I can drive!');

// with strict mode enabled, it finds that hasDriverLicence is not defined

// without strict mode, it outputs false as hasDriversLicense has not been changed to true
// this isdue to the error that hasnt beene catched

console.log(hasDriversLicense);

*/

