//1.

let x=1;
if(x===1){
    let x=2;
    console.log(x);
}
console.log(x);

//2.

const x=42;

try{
    x=99;
}
catch(err){
    console.log(err);
}
console.log(number);

//3.

const newArray = [...oldArray];
const newObj = [...person, someProperty];

//4.

function multiply(a, b=1){
    return a*b;
}
console.log(multiply(5,2));
console.log(multiply(5));

//5.

const person ={
    name:"Michael",
    yearOfbirth:1999
}
const personOutput = `The person's name is: ${person.name} and he/she is ${2021 -person.yearOfbirth} years old`;

//6.

const a, b, rest;
[a, b] = [10,20];
console.log(a);
console.log(b);

[a,b,...rest] = [10,20,30,40,50];
console.log(rest);

//7.

function writeNumbers(a,b,c,...rest){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(rest);
}
writeNumbers(1,2,3,4,5,6)

//8.

const roles =["qa","hr","dev"];

for(let i=0;i<roles.length;i++){
    console.log(roles[i]);
}

for(role of roles){
    console.log(role);
}