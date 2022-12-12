// function myFunc(theObject) {
//     theObject.make = 'Toyota';
//   }
  
//   const mycar = {
//     make: 'Honda',
//     model: 'Accord',
//     year: 1998,
//   };
  
//   // x gets the value "Honda"
//   const x = mycar.make;
//  console.log(x); 

//   // the make property is changed by the function
//   myFunc(mycar);
//   // y gets the value "Toyota"
//   const y = mycar.make;
//   console.log(mycar);

  function myFunc(string){
     car="toyota";
    

  }
  let car="Hyundai";
  console.log(car);

// let a=car;
// console.log("a:",a);

myFunc(car);

console.log(car);
// let b=car;
// console.log("b:",b);

//function expression
const factorial=function (n){
    return n<2?1: n*(n-1);
}
console.log(factorial(3));

//rest parameters
//syntax= function f(a,b,...theArgs)
function len(...theArgs){
  
  console.log("length",theArgs.length);


}
len(12,9,8,4);

//rest parameters
function show(a,b,...theArgs){
  console.log("a",a);
  console.log("b",b);
  console.log("others",theArgs);
}
show("spoon","pen","rocket","pencil","eraser");



  