//constant is represented as "const" in Es6
// const is block-scope variable
//const color;  //error it have to be initialize
///Typeerror "const " is immutable

//const in objects 
const draw={
    shape:"square",
    color:"Brown"
};
console.log(draw);
console.log(draw.color);
console.log(draw.color="violet");
console.log(draw);

//but you cannot access like this
//draw={color:"violet"}; //Typeerror

//If you want to make properties of "draw" object to be immutable
//Use "Object.freeze() method"
/*const person=Object.freeze({age:20});
person.age=30;
console.log(person.age);//Typeerror */

const company=Object.freeze({
    name:"Aspire",
    address:{
        street:"SIPCOT IT Park",
        city:"chennai"
    }
});
console.log(company);
company.address.country="India";
console.log(company);

//Javascript const and Arrays
const shapes=['rectangle'];
shapes.push('circle');
console.log(shapes);

shapes.pop();
shapes.pop();
console.log(shapes);
// shapes=["Hexagon"]; //after removing parameters from existing array we cannot give new values to that array
// console.log(shapes);//TypeError


//Javscript const in for loop
let scores=[59,90.87]
for(const score of scores){  //where you are not going to change 
    console.log(score);
}
// for(const i=0;i<scores.length;i++){  //TypeError
//     console.log(scores[i]);
// }
