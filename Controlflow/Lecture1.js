const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log("User is logged in.");
} else {
    console.log("No user is logged in.");
}

if(2=="2"){
    console.log("Condition-1 is true");
}
if(2==="2"){
    console.log("Condition-2 is true");
}

//Falsy values: false, 0,-0,BigInt 0n, "", null, undefined, NaN
//Truthy values: Everything else
// suprise check
if([]){
    console.log("Empty array is truthy");
}

if({}){
    console.log("Empty object is truthy");
}

if(" "){
    console.log("String with space is truthy");
}

if( new Date()){
    console.log("Date object is truthy");
}

if("0"){
    console.log("String '0' is truthy");
}

// Nullish Coalescing Operator (??)
let userCount = 0;
let totalUsers = userCount ?? 100; // totalUsers will be 0 because userCount is not null or undefined
console.log("Total Users:", totalUsers);

let userName = null;
let displayName = userName ?? "Guest"; // displayName will be "Guest" because userName is null
console.log("Display Name:", displayName);

// Ternary Operator
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote." : "No, cannot vote.";
console.log("Can Vote:", canVote);

age = 16;
canVote = (age >= 18) ? "Yes, can vote." : "No, cannot vote.";
console.log("Can Vote:", canVote);

// Switch Statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day Name:", dayName);