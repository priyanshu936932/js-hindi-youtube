// Objects

// An object is a collection of key-value pairs, where each key is a string (or symbol) and the value can be of any data type, including other objects or functions.

const key=Symbol("uniqueKey");

const person={
    name: "Alice",
    age: 30,
    isStudent: false,
    "Location": "Wonderland",
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zipCode: "12345"
    },
    [key]: "This is a unique key", // Using a symbol as a key
    email: "alice@example.com",

}

// console.log(person);
// console.log(person.name); // Accessing property using dot notation
// console.log(person["age"]); // Accessing property using bracket notation
// console.log(person["Location"]); // Accessing property with space in key
// console.log(person[key]); // Accessing property using symbol key

person.age=31; // Modifying existing property
person.phoneNumber="123-456-7890"; // Adding new property

console.log(person);

person.greet=function(){
    console.log("Hello, my name is Priyanshu.");
}

person.greet2=function(){
    console.log( `Hello, my name is ${this.name} and I live in ${this.address.city}.`);
}

console.log(person.greet)
console.log(person.greet())
console.log(person.greet2())
