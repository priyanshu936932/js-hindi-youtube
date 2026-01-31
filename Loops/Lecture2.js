const arr=[10,20,30,40,50];

// const arr1=arr.forEach(num=>console.log("Number in forEach loop:",num));

const arr2=arr.map(num=>num*2); // functional programming
console.log("arr2:",arr2);

const totalSum=arr.reduce((a,b)=>a+b,0);  // accumulator pattern
console.log("Total Sum:",totalSum);

const filteredArr=arr.filter(num=>num>25); // compratorative programming
console.log("Filtered Array:",filteredArr);

arr.forEach(num=>{//.     consumer function
    console.log("Number in forEach loop:",num);
});
