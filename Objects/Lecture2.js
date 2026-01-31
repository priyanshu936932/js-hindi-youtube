const tinder=new Object();
tinder.name="Tinder";
tinder.yearFounded=2012;
tinder.isActive=true;
tinder.founders=["Sean Rad","Jonathan Badeen","Justin Mateen","Joe Munoz","Dinesh Moorjani","Whitney Wolfe Herd"];
tinder.ceo="Renate Nyborg";

console.log(tinder);

// assignning methods to objects
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

const obj3=Object.assign({},obj1,obj2);
console.log(obj3);

