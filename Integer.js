//Numbers and Operators
const  int=3;
const float=6.5098;
console.log(int);
console.log(float);

//to find datatype of declared variable
console.log(typeof (int));
//to round your  number to a fixed number of decimal places
console.log(float.toFixed(3));
//changing string value to number using Number() Constructors
var num1="565";
num1 +=3;
console.log(num1);

num1=Number(num1)+4; //passing string value into number constructor to make number
console.log(num1);

//operators
const value1=40;
const value2=10;

console.log(value1+value2);
console.log(value1-value2);
console.log(value1*value2);
console.log(value1/value2);
console.log(value1%value2);
console.log(value1**value2);//Exponent

//Increment Operators
let number=2;
console.log(number++);
console.log(number);
//Decrement Operators
console.log(number--);
console.log(number);

console.log("Assignment Operator");
let x=10;

console.log(x=20);
console.log("Addition Operator");
console.log(x+=2);
console.log("Subtraction Operator");
console.log(x-=3);
console.log("Multiply Assignment");
console.log(x*=4);
console.log("Division Assignment");
console.log(x/=4);