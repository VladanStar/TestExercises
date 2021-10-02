
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

console.log(''=='0');
console.log(''==0)
console.log(0=='0')
console.log(NaN==NaN)
console.log(['']=='')
console.log(false ==undefined)
console.log(false ==null)
console.log(null==undefined)

console.log([2,13,4].map(e=>e-2));

const increment = (x)=>{
    return ++x;
}
const dus = (x,y,f=increment=>{
    return f(x) +f(y);
})
const output = dus(2,3);
console.log(output);

