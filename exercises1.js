//--------------1.-------------

var x = [1, 8, 9, 9, 2];
console.log(x[13]);
//undefined

//---------------2.-----------

var a = 4,
  b = 3;
if ((a = b)) {
  console.log("the numbers is equal");
} else {
  console.log("Nope they aren't");
}

//---------------3.-------------

console.log("312" == 312);
//true

//----------------4.------------

var value = 2;
switch (value) {
  case 2:
    console.log("2");
  case 3:
    console.log("3");
  case "2":
    console.log("Hmmm");
    break;
  default:
    console.log("~*~");
}
//2/3/Hmmm

//-------------5.----------

var x;
console.log(x);

//--------------6.----------

console.log(typeof typeof 1);
//string

//---------------7.-----------

console.log("good morning");

//-----------------8.--------------

var input =0xA41;
console.log(typeof input);

//-----------------9.----------------

var a =[2,3,'abc',11,-7];
console.log(a[a.length-1]);

//--------------10.------------

var n=10;
n*=4;
console.log(n);

//-------------11.-------------

var array = ['abcd','ef','ghi','jkl'];
console.log(array[2]);

//------------------12.--------------

console.log(10*"Abc");
//NaN

//----------------------13.---------------

console.log([2,3,4])==[2,3,4];

//----------------------14.-------------

console.log( 2 > 10 ? "two" : 5 > 3 ? "five": 'three');

//------------------15.----------------

console.log(typeof 2 + 3);

//------------------16.----------------

var x=10;
var y=5;
console.log(x+"y = "+ (x+y));

//-----------------17.------------------

var a =12;
var result =2;
if(a>10){
    result = result + 2;
}
else {
    result = result -2;
}
console.log(result);

//------------------18.---------------

console.log(2e2 +1);

//------------------19.--------------

console.log(2<3+5);

//---------------20.------------

//Is number.of.users.correct.identifier?
//no

//--------------21.---------------

var a =10, b=5;
var result =a || b++;
console.log(a,b);

//-------------------22.----------------

console.log(2<3<1);
//false

//-------------------23.--------------

var a =[[1,2,3],[4,5,6],8,[9,10]];
//a[3][0];

//---------------------24.------------

var array =['s','c','r','i','p','t'];
array.length=0;
console.log(array)
//[]

//---------------------25.--------------

console.log("312"===312);

//--------------------26.---------------

var x =10;
var y=5;
console.log(x+"y="+ x+y);

//---------------27.--------------------

var x =1,y=3,z=8;
x=y=z=8;
console.log(x,y,z);
// 8 8 8

//--------------------28.-------------

//Is JavaScript case sensitive language?
//yes