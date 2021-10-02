function Book(title, autors){
    this.title = title;
    this.autors =autors;
    this.print= function(){
        console.log(title + " " + autors )
    }
}
var book = new Book("JS", "BIT students");
book.print()

console.log(name);
var name = 'John Show'


console.log('surprise'[1].concat('ps'));

let holiday = Object.create({destination:"Madrid"})
holiday.date ='1.5.2018';
console.log(holiday.traveller, holiday.date, holiday.destination)

const a =[3,4,5];
a[3]=12
console.log(a)

console.log(10*'Abc')

const myArr =[1,2,3,4];
Array.prototype.pop=function(){
    return this.slice(0,this.length-1)
}
console.log(myArr.pop)

new Promise(fulfill=>{
    console.log("Hello")
})
.then(msg)

console.log('123'.split('').join(':'))


let s = "JavaScriptPrograming"
let result = s.charAt(3)
console.log(result)

let f = (array,n)=>(e=> e !=n)

console.log(f(['abc', 'u','e','abc','Abc']))

let f = function(a){
    return typeof a =="number"&&a >12
}
console.log(f('23'))
function comp(f,message){
    f(message)
}
comp(console.log,"sunny day")

function f(a,b){
    return b+ function(){
        return b+1;
    }(a)
}
console.log(f(10,3))

let cup = 'coffee';
cup.toUpperCase();
console.log(cup)

console.log("experience".indexOf("P"))

var a =10, b=5;
var result =a || b++;
console.log(a,b)


let f =(a,b)=>a+b;
console.log(f(2*3,2-1))

function print(s,prefix='~'){
    console.log(`${prefix}${s}`);
}
print('spring')



function print(){
    var tag = "TAG"
    console.log(this.tag)
}
print()

let array=[]
for(let i=0; i<4;i++){
    array.push(i)
}
console.log(i)

let x =y=2
console.log(`${x}+{y} = ${x+y}`)

var array = ['abcd','ef','ghi','jkl'];
[,,element] =array;
console.log(element)

var v = ['onion','carrot','tomato']
var r = v.every(e=>e.includes('o'))
console.log(r)
var greeting = "Hello!"
function sayHello(){
    console.log(this.greeting)
}
sayHello()

let positive =[89,29,5];
let negative=[-3,-1]
console.log([...negative,...positive])

console.log([2,3,4] ==[2,3,4])

const[name,surname,,job]=["Pera","Peric",38,"Developer"]
console.log(`${name} - ${job}`)

var input = 0xA41;
console.log(typeof input)

function add(a,b){
    var a =10;
    console.log(a+b)
}
add(12,3)

let sum =0
let array = [4,5,"11",2];
array.forEach(function(e){
    sum+=e;
})
console.log(sum)


var a = [2,3,"abc",11,-7];
console.log(a[a.length-1])


let sum =0
for(let i =0;i<10;i++){
    if(i%3==0){
        sum++
    }
    if(i==8){
        break;
    }
}
console.log(sum)

var a;
function calc(){
    a=3;
    var a;
    return a+10
}
console.log(a+calc());

s= 'enjoy'
function advice(){
    "strict mode";
    console.log(s+"programming")
}
advice()

let calc = (fil, num)=>{
    fil*num
}
console.log(calc(100,5))

let data ="{\"ocuppation\":\"writer\",\"famous\":false}"
let obj = JSON.parse(data)
console.log(obj.ocuppation)