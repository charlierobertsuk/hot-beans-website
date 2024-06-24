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


//datatypes - part 2

const inputYear = `2007`;
console.log(inputYear + 10)