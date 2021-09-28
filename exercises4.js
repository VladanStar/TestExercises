//---------1.-----------

var obj ={x:5,y:13}
console.log(obj.x);

//5

//------------2.-----------

var mondayTodo = {
    activity:"do the dishes",
    song: "lalala",
    sing: function(){
        console.log(this.song);
    }
}
    var tuesdayToDo= {
        activity:"do the loundary",
        song: "ooooooo",

    }
mondayTodo.sing.call(tuesdayToDo);
//'ooooooooooooo'

//-------------3.-----------

var a =34;
function transform(a){
    a=a*2;
}
transform(a);
console.log(a);

//----------------4.------------

var array = ['a','b','c'];
function transform(array){
    for(var i=0;i<array.length;i++){
        array[i] = array[i].toUpperCase();
    }
}
transform(array);
console.log(array);

//-----------5.-------------

var result = Array.prototype.indexOf.call([1,3,5,2,11],3);
console.log(result);

//----------6.-----------

var a = [2,3,4,5];
var b = [2,3,4,5];

console.log(a===b);
//false

//------------7.------------

var coffee= 'cappuccino';
var superCoffe={
    cooffee:'espresso',
    strength:3,
    orderCoffee:function(){
        console.log(coffee);
    }
};
superCoffe.orderCoffee();
//'cappucciono'

//------------8.-----------

function orderCoffee(){
    console.log(this.coffee);
}
orderCoffee();
var coffee = 'espresso';
//undefined

//--------------9.-------------

var coffee = 'cappuccino';
function orderCoffee(){
    console.log(this.coffee);
}
orderCoffee();
//undefined

//------------10.------------

var result;
result =String.prototype.concat.call('abc','ABC');
console.log(result);

//------------11.-------------

var obj = Object.create({product:'mug'})
obj.color='red';
console.log(obj.color);
//red

//---------------12.---------------

var a =34;
function transform(a){
    return a*2;
}
transform(a);
console.log(a);
//34

//-------------------13.-------------

var obj = {x:5,y:13};
console.log(obj.z);
//undefined

//---------------14.----------------

var obj = Object.create({product:'mug'})
obj.color = "red";
obj.product = "teacup";
console.log(obj.product);

//----------------15.------------

var x=5;
try{
    if(x<10){
        throw new Error("Wrong input");
    }
    console.log(x);
}catch(error){
    console.log(error.message);
}

//----------------16.--------------

var a =[2,3,4,5];
var b = a;
console.log(a===b);
//true

//---------------17.-----------

var coffee= 'cappuccino';
var superCoffee={
    cooffee:'espresso',
    strength:3,
    orderCoffee:function(){
        return coffee;
    }()
};
console.log(superCoffee.orderCoffee());
//superCoffe.orderCoffee is not a function

//------------------18.-------------

Object.prototype.day= "Monday";
var plan = {activity:"JS codding"};
console.log(plan.day);
//'Monday'

//-------------19.------------

var obj = {x:10,y:5};
function transform(o){
    o.x +=2;
    o.z=10;
}
transform(obj);
console.log(obj.x + obj.z);
//22

//------------------20.------------

Object.prototype.day = "Monday";
var plan ={activity:"JS codding", day:"always"};
console.log(plan.day);

//-----------21.---------------

var x=5;
try{
    x*=3;
    if(x<10){
        throw new Error("Wromg input");
    }
    console.log(x);
}
catch(error){
    console.log(e.massage);
}finally{
    console.log("Done");
}

//-------------22.------------

var x=5;
try{
    x*=3;
    if(x<10){
        throw new Error("Wromg input");
    }
    console.log(x);
}
catch(error){
    console.log(e.massage);
}

//--------------23.------------
'use strict'
var obj = {x:5,y:13};
obj.z=20;
console.log(obj);

//--------------24.---------

var coffee= 'cappuccino';
var superCoffee={
    cooffee:'espresso',
    strength:3,
    orderCoffee:function(){
        return coffee;
    }()
};
console.log(orderCoffee());
//orderCoffee is not defined

//----------------25.-------------

var a ={x:4,y:11};
var b ={x:4,y:11};

Object.prototype.formating = function(){
    return "{x:"+ this.x +"," + this.y +"}"
};
console.log(a.formating()==b.formating());
//true