
if(true){
    let a=40;
    const b=50;
    var c=60;
    console.log("Inside Block:",a,b,c);
}

console.log("Outside Block:",c); // var is function scoped
// console.log("Outside Block:",a,b); // ReferenceError: a is not defined