// Arrays
// let fruites=["apple","banana","mango"];
// console.log(fruites);
// let numbers=[1,2,3,4,5];
// console.log(numbers);

// // Created Sallow Copy
// let newfruites=fruites;
// newfruites.push("grapes");
// console.log("After adding grapes to newfruites");
// console.log("fruites:",fruites);
// console.log("newfruites:",newfruites);

// for(let i=0;i<fruites.length;i++){
//     console.log(fruites[i]);
// }
// const colors=["red","green","blue"];
// for(let color of colors){
//     console.log(color);
// }

// const numbers=[10,80,90,100,20,30,40,50];
// numbers.push(60)
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// numbers.unshift(9);// O(n)
// numbers.shift();// O(n)
// numbers.toSorted((a,b)=>a-b);
// console.log(numbers.indexOf(100));

// console.log(numbers);

// const newNumbers=[5,10,15,20];

// numbers.join(newNumbers)

//slice,splice
// numbers.slice(2,5);
// console.log(numbers);
// numbers.splice(2,3);


// console.log(numbers);

// numbers.sort((a,b)=>a-b);
// console.log(numbers);

// const newNumbers=numbers.map((num)=>num*2);
// console.log(newNumbers);

// const filteredNumbers=numbers.filter((num)=>num>50);
// console.log(filteredNumbers);

// const sum=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
// console.log(sum);

// const number2=[5,10,15,20,25,30];
// const allNumbers=numbers.concat(number2);
// console.log(allNumbers);

// const number3=[...numbers,...number2];
// console.log(number3);

// const hasNumber=numbers.includes(90);
// console.log(hasNumber);

// const nums=[1,2,3,4,5,6,7,8,9,10,[11,12,13],14,15,[[16,17],18]];
// console.log(nums);
// const flatNums=nums.flat(Infinity);
// console.log(flatNums);

// console.log(Array.isArray(nums));

const names=["Alice","Bob","Charlie"];
console.log(names);
names.fill("Unknown",1,3);
console.log(names);

