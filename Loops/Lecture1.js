// const arr=[10,20,30,40,50];

// higher order for loop
// arr.forEach((num)=>{
//     console.log("Number:",num);
// });

//

// for(let num of arr){
//     console.log("Number in for...of loop:",num);
// }

// traditional for loop
// for(let i=0;i<arr.length;i++){
//     console.log("Number in traditional for loop:",arr[i]);
// }

// while loop
// let i=0;
// while(i<arr.length){
//     console.log("Number in while loop:",arr[i]);
//     i++;
// }

// do...while loop
// i=0;
// do{
//     console.log("Number in do...while loop:",arr[i]);
//     i++;
// }while(i<arr.length);


// const greeting ="Hello world i am learning loops in javascript";
// for(let greets of greeting){
//     console.log(greets)
// }

const map=new Map();
map.set("name","Priyanshu");
map.set("age",24);
map.set("city","New Delhi");

for(let key of map.keys()){
    console.log("Key:",key);
}
for(let value of map.values()){
    console.log("Value:",value);
}
for(let entry of map.entries()){
    console.log("Entry:",entry);
}
for(let [key,value] of map.entries()){
    console.log(`Key: ${key}, Value: ${value}`);
}

const person={
    name: "Priyanshu",
    age: 24,
    city: "New Delhi"
};

for(let key in person){
    console.log(`Key: ${key}, Value: ${person[key]}`);
}

