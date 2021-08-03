// First part  
var number1 = 25;
var number2 = 22.5;
var result = number1+number2;
console.log(result);
// Convert String into Number
var number3 = '22.5';
var number4 = 15;
// The output say number3 is an string,So if we want to take this into Number follow under code 
number3= +number3;
// or
number3 = parseInt(number3);
// or 
number3 = parseFloat(number3);

console.log(number3+number4);
// Convert Number into String 
var number5 = 22.5;
var number6 = 15;
number6 = ''+number6;
console.log(number6+number5)
// Extra Js Problem 
var number7 = 0.1;
var number8= 0.2;
var total = number7+number8;
total = total.toFixed(1)
console.log(total);
// Js Math 
// +++++
var alurDam = 26;
var rutirDam = 10;
console.log(alurDam+rutirDam+' '+'Tk');
// ---------
var aluvaji=10;
var dim = 15;
console.log(dim-aluvaji)
// ********
var num1 =10;
var num2 =5;
console.log(num1*num2)
///////////
var num4 =10;
var num3 =5;
console.log(num4/num3)
// Vagsesh
var price =13;
var price2 =7;
console.log(price % price2);
// Math 
// Absolute 
var num = -10;
var Absolute = Math.abs(num);
console.log(Absolute);
// Round
var round = 12.4590;
console.log(Math.round(round));
var round2 = 14.590;
console.log(Math.round(round2));
// Ceiling 
var ceil = 12.1;
console.log(Math.ceil(ceil));
// Floor 
var Floor = 12.4590;
console.log(Math.floor(Floor));
// Random Number 
var Random = Math.random();
console.log(Random);
// 6 dighit Random Number 
var random1 = Math.random()*1000000;
console.log(Math.floor(random1));