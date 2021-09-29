//-------------1.-------------

var a = 20;
function f(n) {
  var result = a + n;
  a = 30;
  return result;
}
console.log(f(5));

//----------------2.-----------

console.log(n);
var n = 5;
//---------------3.-------------

console.log(sum(2, 3));
function sum(x, y) {
  return x + y + 1;
}

//--------------4.------------

var a = 10;
function f(a, b) {
  a++;
  b--;
}
f(a, 2);
console.log(a);
//------------------5.----------

function f() {
  return function (a, b) {
    return a + b;
  };
}
var result = f();
console.log(result);
//---------------6.---------

function f() {
  return function (a, b) {
    return a + b;
  };
}
var result = f()(1, 3);
console.log(result);
//-----------------7.---------

function outer(x) {
  function inner(y) {
    return y + 1;
  }
  return x + inner(x);
}
var result = outer(5);
console.log(result);

//---------------8.------------

(function () {
  console.log("spring time");
})();
//--------------9.------------

(function (s) {
  console.log(s);
})("JS");

//---------------10.-------------

var r;
(function (a, b) {
  return a + b;
})(2, 11);
console.log(r);

// ------------11.-----------

var input = 12;
function f() {
  input = 15;
}
console.log(input);

//------------------12.----------

var input = 12;
function f() {
  input = 15;
}
f;
console.log(input);

//----------------13.----------------

var input = 12;
function f() {
  input = 15;
}
f();
console.log(input);

//-----------14.----------------

("use strict");
var x = 1;
function f() {
  return x * 2;
}
f(4);

console.log(x);

//--------------15.-----------

("use strict");
var x = 1;
function f() {
  y = 3;
  return x * y;
}
f(4);
console.log(x);

//-------------16.-----------

function calculate(a, b) {
  var rb = b % 10;
  var ra = a % 10;
  a = a - ra + rb;
  b = b - rb + ra;
  console.log(a, b);
}
calculate(123, 45);

//-------------17.-----------

var a = [3, 4, 1, 2];

function addOne(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] += 1;
  }
}
addOne(a);
console.log(a);

//-----------18.-------------

function f(a, b) {
  var result = a + b;
}
console.log(f(2, 1));

//---------------19.------------

console.log(console.log("JS"));

//----------------20.------------

function transform(a, b, f) {
  var result;
  result = f(a) + f(b);
  console.log(result);
}
transform(2, 4, function (x) {
  return x + 1;
});

//-----------21.-----------

var result;
function add(a, b) {
  return a + b;
}
result = add(2);
console.log(add);

//-------------22.-------------

var result;
function add(a, b) {
  return a + b;
}
result = add(2);
console.log(result);

//-------------23.------------

var a = 12;
var b = 3;
var result;

function add(a, b) {
  return a + b;
}
result = add();
console.log(result);

//-------------------24.--------------

var a = 12;
var b = 3;
var result;

function add() {
  return a + b;
}
result = add(2, 11);
console.log(result);

//-------------------25.-----------------

function transform(a, b, f) {
  var result;
  result = f(a) + f(b);
  console.log(result);
}
function double(x) {
  return 2 * x;
}
transform(2, 4, double);

//-------------------26.------------

transform(2, 4, square);
function transform(a, b, f) {
  var result;
  result = f(a) + f(b);
  console.log(result);
}
var square = (function (x) {
  return x * x;
})
  //--------------27.---------------

  (function (a, b, condition) {
    if (condition(a, b)) {
      console.log(a);
    } else {
      console.log(b);
    }
  }
)(2, 6, function (x, y) {
  return x > y;
});

//---------------28.--------------

var a = 20;
function f(n) {
  var result = a + n;
  var a = 30;
  return result;
}
console.log(f(5));

//-----------------29.------------

var a, b;
function calculate(a, b) {
  var rb = b % 10;
  var ra = a % 10;

  a = a - ra + rb;
  b = b - rb + ra;
}
calculate(123, 45);
console.log(a, b);

//-------------30.--------------

var r;
r = (function (a, b) {
  return a + b;
})(2, 11);
console.log(r);

//---------------31.----------

var a = 10;
function f(a, b) {
  a++;
  b--;
  console.log(a, b);
}
f(a, 2);
console.log(a);

//--------------32.----------------

console.log(mul(2, 3));
var mul = function (x, y) {
  return x * y;
};
