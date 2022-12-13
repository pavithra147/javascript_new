//var have global scope
var num=10;
function add(){
    var num=30;
    const sum=num+29;
    console.log("sum of the numbers:",sum);
}
console.log("sum:",sum=num+29);
add();
//let is having block-scope
// let num=10;
// function add(){
    
//     const sum=num+29;
//     console.log("sum of the numbers:",sum);
// }
// add();
  //SyntaxError

  function add(){
    let num=10;
    
    const sum=num+29;
    console.log("sum of the numbers:",sum);
}
add();

//let and var
var a=20;
var a=40;
console.log("a:",a);


// let num=30;  /*syntax error*/
// let num=50;
// console.log(num);

//if we use let variable twice within the same block it will throw an error



//var hoisting----it allows the use of variable in javascript even before it is declared

console.log(name);
var name="prabhu";
console.log(name);


    
