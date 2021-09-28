//------------1.------------

var numbers = [1, 2, 3, 4, 5];
var number1 = numbers.pop();
var number2 = numbers.pop();
numbers.push(number1 + number2);
console.log(numbers);

//-----------2.--------------

var numbers = [1, 2, 3, 4, 5];
console.log(numbers[10]);

//-------------------3.-------------

var numbers = [1, 2, 3, 4, 5];
numbers[0] = numbers[numbers.length];
console.log(numbers);

//---------------4.----------

var numbers = [1, 2, 3, 4, 5];
numbers[0] = numbers[numbers.length - 1];
console.log(numbers);

//--------------5.-------------

var numbers = [1, 2, 3, 4, 5];
numbers.length = 10;
console.log(numbers);

//-------------6.-------------

var smallNumbers = [1, 2, 3, 4, 5];
var niceNumbers = [1, 2, 3, 4, 5];
console.log(smallNumbers === niceNumbers);

//----------7.-------------

var smallNumbers = [1, 2, 3, 4, 5];
var niceNumbers = [1, 2, 3, 4, 5];
console.log(smallNumbers.join('') === niceNumbers.join(''));

//---------------8.------------

var smallNumbers = [1, 2, 3, 4, 5];
var niceNumbers = [1, 2, 3, 4, 5];
var equalArrays = true;
for (var i = 0; i < smallNumbers.length; i++) {
  if (smallNumbers[i] != niceNumbers[i]) {
    equalArrays = false;
    break;
  }
}
console.log(equalArrays);

//------------9.------------

var numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers);

//-----------8.-------------

var numbers = [1, 2, 3, 4, 5];
numbers.push('~');
numbers.unshift('~');
console.log(numbers.join('*'));

//-------------9.------------

var numbers = [1, 89, 3, 4, 10, 20, 50];
numbers.sort();
console.log(numbers);

//---------------10.------------

var numbers = [1, 89, 3, 11, 4, 20, 50];
numbers.sort(function (number1, number2) {
  var number1 = parseInt(number1);
  var number2 = parseInt(number2);

  return number2 - number1;
});
console.log(numbers)

//-------------11.------------

var points = [
    { x: 5, y: 10 },
    { x: -1, y: 4 },
    { x: 0, y: 5 },
    { x: 2, y: 12 },
  ];
  points.sort(function (point1, point2) {
    // sortiranje po vrednosti x koordinate u rastucem poretku
    return point1.x - point2.x;
  });
  console.log(points);

  //---------------12.-----------

  var fruits = ['apple', 'orange', 'lemon', 'grape', 'strawberry'];
var salad = fruits.slice(3, 5);
salad.push('cream');
console.log(salad);

//---------------13.------------

var chars = ['a', 'b', 'c', 'd'];
console.log(chars.join(''));

//-----------------14.-------------

var chars = ['a', 'b', 'c', 'd'];
chars[7] = 'm';
console.log(chars.length);

//---------------15.-------------

function misticFunction(array) {
    var newArray = [];
    // array: ['a', 'b', 'd', 'u']
    // newArray: ['u', 'd', 'b', 'a']
  
    for (var i = 0; i < array.length; i++) {
      newArray[array.length - 1 - i] = array[i];
    }
    return newArray;
  }
  var misticResult = misticFunction(['a', 'b', 'd', 'u']);
  console.log(misticResult);

  //-----------------16.--------------

  function misticFunction(array) {
    for (var i = 0; i < array.length; i++) {
      array[i] += array[i];
    }
  }
  var numbers = [1, 2, 3, 4, 5];
  misticFunction(numbers);
  console.log(numbers);