// const user={
//     name:"Priyanshu",
//     price:99,
//     welcomeMessage:function(){
//        console.log(`Welcome ${this.name} to the JavaScript Course!`);
//        console.log(this)
//     }
// }
// user.welcomeMessage();

// console.log(this); // In global context, 'this' refers to the global object (window in browsers, global in Node.js)

// function showThis(){
//     console.log(this); // In a regular function, 'this' refers to the global object (or undefined in strict mode)
// }
// showThis();

// const valuePrint = () => {
//     console.log(this); // In an arrow function, 'this' refers to the surrounding lexical context (global object in this case)
// }
// valuePrint();

// Invoking method as a callback

(function invoked(){
    console.log("My name is Priyanshu");
})();


((name)=>{
    console.log(`My name is ${name}`);
})("Priyanshu Mishara")